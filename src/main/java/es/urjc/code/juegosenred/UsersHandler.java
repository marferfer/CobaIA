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

public class UsersHandler extends TextWebSocketHandler {

	private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
	private ObjectMapper mapper = new ObjectMapper();
	private Map<String, Item> users = new HashMap<>();
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("New user: " + session.getId());
		sessions.put(session.getId(), session);
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		System.out.println("Session closed: " + session.getId());
		sessions.remove(session.getId());
		if (users.containsKey(session.getId())) {
			Item myItem = users.get(session.getId());
			ItemsController.borraItem(myItem.getId());
		}		
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		
		System.out.println("Message received: " + message.getPayload());
		JsonNode node = mapper.readTree(message.getPayload());
		
		Collection<Item> itemsColl = ItemsController.items();
		ArrayList<Item> items;
		if (itemsColl instanceof List)
		  items = (ArrayList<Item>)itemsColl;
		else
		  items = new ArrayList<Item>(itemsColl);
		Item myItem = new Item();
		for (int i = 0; i < items.size(); i++) {
			if (items.get(i).getDescription().equals(node.get("name").asText())) {
				myItem = items.get(i);
			}
		}
		if (node.get("message").asText().equals("hi")) {
			
			ObjectNode newNode = mapper.createObjectNode();
			newNode.put("name", node.get("name").asText());
			newNode.put("message", node.get("message").asText());
			
			if (items.contains(myItem)) {
				newNode.put("message", "User Repeated");
			}
			else {
				myItem.setDescription(node.get("name").asText());
				myItem = ItemsController.nuevoItem(myItem);
				newNode.put("message", "User Created");
				users.put(session.getId(), myItem);
			}
			answer(session, newNode);
		}
	}
	
	private void answer(WebSocketSession session, ObjectNode node) throws IOException {

		System.out.println("Message sent: " + node.toString());
		
		
		for(WebSocketSession participant : sessions.values()) {
			if(participant.getId().equals(session.getId())) {
				participant.sendMessage(new TextMessage(node.toString()));
				break;
			}
		}
	}
}
