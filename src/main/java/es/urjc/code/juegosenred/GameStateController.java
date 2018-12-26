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
@RequestMapping("/gameStates")
public class GameStateController {

	Map<Long, GameState> gameStates = new ConcurrentHashMap<>(); 
	AtomicLong nextId = new AtomicLong(0);
	
	@GetMapping
	public Collection<GameState> gameStates() {
		return gameStates.values();
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public GameState nuevoGameState(@RequestBody GameState gameState) {

		long id = nextId.incrementAndGet();
		gameState.setId(id);
		gameStates.put(id, gameState);

		return gameState;
	}

	@PutMapping("/{id}")
	public ResponseEntity<GameState> actulizaGameState(@PathVariable long id, @RequestBody GameState gameStateActualizado) {

		GameState savedGameState = gameStates.get(gameStateActualizado.getId());

		if (savedGameState != null) {

			gameStates.put(id, gameStateActualizado);

			return new ResponseEntity<>(gameStateActualizado, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<GameState> getGameState(@PathVariable long id) {

		GameState savedGameState = gameStates.get(id);

		if (savedGameState != null) {
			return new ResponseEntity<>(savedGameState, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<GameState> borraGameState(@PathVariable long id) {

		GameState savedGameState = gameStates.get(id);

		if (savedGameState != null) {
			gameStates.remove(savedGameState.getId());
			return new ResponseEntity<>(savedGameState, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
