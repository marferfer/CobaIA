package es.urjc.code.juegosenred;

import java.awt.List;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class PersonajeHandler extends TextWebSocketHandler {
	private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
	private ObjectMapper mapper = new ObjectMapper();
	private boolean tankaReady = false;
	private boolean taliReady = false;
	private boolean acroReady = false;
			
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("New user: " + session.getId());
		sessions.put(session.getId(), session);
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		System.out.println("Session closed: " + session.getId());
		sessions.remove(session.getId());
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		
		System.out.println("Message received: " + message.getPayload());
		JsonNode node = mapper.readTree(message.getPayload());
		
		if (!node.get("message").asText().equals("still alive")) { 
		
			String n = node.get("name").asText();
			
			Collection<Grupo> gruposColl = GruposController.grupos();
			ArrayList<Grupo> grupos;
			if (gruposColl instanceof List)
			  grupos = (ArrayList<Grupo>)gruposColl;
			else
			  grupos = new ArrayList<Grupo>(gruposColl);
			Grupo myGroup = new Grupo();
			for (int i = 0; i < grupos.size(); i++) {
				if (grupos.get(i).getId() == node.get("groupId").asInt()) {
					myGroup = grupos.get(i);
				}
			}
			
			boolean wereReady = false;
			
			if (myGroup.isTankaReady() && myGroup.isTaliReady() && myGroup.isAcroReady()) {
				wereReady = true;
			}
			
			if (n.equals("ready")) {
				switch (node.get("message").asText()) {
				case "tankabaIA":
					if (!tankaReady) {
						tankaReady = true;
					}
					else {
						tankaReady = false;
					}
					myGroup.setTankaReady(tankaReady);
					break;
				case "acrobaIA":
					if (!acroReady) {
						acroReady = true;
					}
					else {
						acroReady = false;
					}
					myGroup.setAcroReady(acroReady);
					break;
				case "talibaIA":
					if (!taliReady) {
						taliReady = true;
					}
					else {
						taliReady = false;
					}
					myGroup.setTaliReady(taliReady);
					break;
				default:
					break;
				}
				
				GruposController.actualizaGrupo(myGroup.getId(), myGroup);
				
				if (myGroup.isTankaReady() && myGroup.isTaliReady() && myGroup.isAcroReady()) {
					ObjectNode newNode = mapper.createObjectNode();
					newNode.put("groupId", node.get("groupId").asText());
					newNode.put("message", "start");
					for(WebSocketSession participant : sessions.values()) {
						participant.sendMessage(new TextMessage(newNode.toString()));
					}
				}
				
				else if (wereReady) {
					ObjectNode newNode = mapper.createObjectNode();
					newNode.put("groupId", node.get("groupId").asText());
					newNode.put("message", "cancel that");
					for(WebSocketSession participant : sessions.values()) {
						participant.sendMessage(new TextMessage(newNode.toString()));
					}
				}
				
				/*if (tankaReady && taliReady && acroReady) {
					ObjectNode newNode = mapper.createObjectNode();
					newNode.put("groupId", node.get("groupId").asText());
					newNode.put("message", "start");
					for(WebSocketSession participant : sessions.values()) {
						participant.sendMessage(new TextMessage(newNode.toString()));
					}
				}*/
			}
			sendOtherParticipants(session, node);
			
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

}