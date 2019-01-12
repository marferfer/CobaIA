package es.urjc.code.juegosenred;

import java.awt.List;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class SalasHandler extends TextWebSocketHandler {
	
	class Sala {
		public String user1Id;
		public String user2Id;
		public String user3Id;
		public String user1;
		public String user2;
		public String user3;
	}

	private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
	private ObjectMapper mapper = new ObjectMapper();
	private Map<String, String> users = new HashMap<>();
	private Map<String, Sala> salas = new HashMap<>();
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("New user: " + session.getId());
		sessions.put(session.getId(), session);
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		System.out.println("Session closed: " + session.getId());
		sessions.remove(session.getId());
		String groupId;
		if (users.containsKey(session.getId())) {
			groupId = users.get(session.getId());
		}
		else {
			groupId = users.get(session.getId());
		}
		Sala s = salas.get(groupId);
		Collection<Grupo> gruposColl = GruposController.grupos();
		ArrayList<Grupo> grupos;
		if (gruposColl instanceof List)
		  grupos = (ArrayList<Grupo>)gruposColl;
		else
		  grupos = new ArrayList<Grupo>(gruposColl);
		Grupo myGroup = new Grupo();
		for (int i = 0; i < grupos.size(); i++) {
			if (grupos.get(i).getNombre().equals(groupId)) {
				myGroup = grupos.get(i);
			}
		}
		
		String userOut = "";
		
		if (session.getId().equals(s.user1Id)) {
			userOut = s.user1;
			s.user1 = s.user2;
			s.user2 = s.user3;
			s.user3 = null;
			s.user1Id = s.user2Id;
			s.user2Id = s.user3Id;
			s.user3Id = null;
			myGroup.setUsuario1(s.user1);
			myGroup.setUsuario2(s.user2);
			myGroup.setUsuario3(null);
		}
		else if (session.getId().equals(s.user2Id)) {
			userOut = s.user2;
			s.user2 = s.user3;
			s.user3 = null;
			s.user2Id = s.user3Id;
			s.user3Id = null;
			myGroup.setUsuario2(s.user2);
			myGroup.setUsuario3(null);
		}
		else if (session.getId().equals(s.user3Id)) {
			userOut = s.user3;
			s.user3 = null;
			s.user3Id = null;
			myGroup.setUsuario3(null);
		}
		if (s.user1 == null && s.user2 == null && s.user3 == null) {
			salas.remove(groupId);
			GruposController.borraGrupo(myGroup.getId());
		}
		else {
			salas.put(groupId, s);
			GruposController.actualizaGrupo(myGroup.getId(), myGroup);
		}
		ObjectNode newNode = mapper.createObjectNode();
		newNode.put("name", userOut);
		newNode.put("message", "bye");
		newNode.put("groupId", groupId);
		sendOtherParticipants(session, newNode);
		users.remove(session.getId());
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		
		System.out.println("Message received: " + message.getPayload());
		JsonNode node = mapper.readTree(message.getPayload());
		
		if (!node.get("message").asText().equals("still alive")) { 
		
			Sala s = new Sala();
			Collection<Grupo> gruposColl = GruposController.grupos();
			ArrayList<Grupo> grupos;
			if (gruposColl instanceof List)
			  grupos = (ArrayList<Grupo>)gruposColl;
			else
			  grupos = new ArrayList<Grupo>(gruposColl);
			Grupo myGroup = new Grupo();
			for (int i = 0; i < grupos.size(); i++) {
				if (grupos.get(i).getNombre().equals(node.get("groupId").asText())) {
					myGroup = grupos.get(i);
				}
			}
			if (node.get("message").asText().equals("hi")) {
				if (salas.containsKey(node.get("groupId").asText())) {
					s = salas.get(node.get("groupId").asText());
					if (s.user2 == null) {
						s.user2 = node.get("name").asText();
						s.user2Id = session.getId();
						myGroup.setUsuario2(s.user2);
					}
					else if (s.user3 == null) {
						s.user3 = node.get("name").asText();
						s.user3Id = session.getId();
						myGroup.setUsuario3(s.user3);
					}
					GruposController.actualizaGrupo(myGroup.getId(), myGroup);
				}
				else {
					s.user1 = node.get("name").asText();
					s.user1Id = session.getId();
				}
				users.put(session.getId(), node.get("groupId").asText());
				salas.put(node.get("groupId").asText(), s);			
			}		
			sendAllParticipants(session, node);
		}
	}

	private void sendOtherParticipants(WebSocketSession session, JsonNode node) throws IOException {

		System.out.println("Message sent: " + node.toString());
		
		ObjectNode newNode = mapper.createObjectNode();
		newNode.put("name", node.get("name").asText());
		newNode.put("message", node.get("message").asText());
		newNode.put("groupId", node.get("groupId").asText());
		
		
		for(WebSocketSession participant : sessions.values()) {
			if(!participant.getId().equals(session.getId())) {
				participant.sendMessage(new TextMessage(newNode.toString()));
			}
		}
	}
	
	private void sendAllParticipants(WebSocketSession session, JsonNode node) throws IOException {

		System.out.println("Message sent: " + node.toString());
		
		ObjectNode newNode = mapper.createObjectNode();
		newNode.put("name", node.get("name").asText());
		newNode.put("message", node.get("message").asText());
		newNode.put("groupId", node.get("groupId").asText());
		
		
		for(WebSocketSession participant : sessions.values()) {
			participant.sendMessage(new TextMessage(newNode.toString()));
		}
	}

}
