package es.urjc.code.juegosenred;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/chats")
public class ChatsController {

	Map<Long, Chat> chats = new ConcurrentHashMap<>(); 
	AtomicLong nextId = new AtomicLong(0);
	
	@GetMapping
	public Collection<Chat> chats() {
		return chats.values();
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Chat nuevoChat(@RequestBody Chat chat) {

		long id = nextId.incrementAndGet();
		chat.setId(id);
		chats.put(id, chat);

		return chat;
	}

	@PutMapping("/{id}")
	public ResponseEntity<Chat> actulizaChat(@PathVariable long id, @RequestBody Chat chatActualizado) {

		Chat savedChat = chats.get(chatActualizado.getId());

		if (savedChat != null) {

			chats.put(id, chatActualizado);

			return new ResponseEntity<>(chatActualizado, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Chat> getChat(@PathVariable long id) {

		Chat savedChat = chats.get(id);

		if (savedChat != null) {
			return new ResponseEntity<>(savedChat, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Chat> borraChat(@PathVariable long id) {

		Chat savedChat = chats.get(id);

		if (savedChat != null) {
			chats.remove(savedChat.getId());
			return new ResponseEntity<>(savedChat, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
