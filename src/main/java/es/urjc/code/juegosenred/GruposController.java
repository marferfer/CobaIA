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
@RequestMapping("/grupos")
public class GruposController {

	static Map<Long, Grupo> grupos = new ConcurrentHashMap<>(); 
	AtomicLong nextId = new AtomicLong(0);
	
	@GetMapping
	public static Collection<Grupo> grupos() {
		return grupos.values();
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Grupo nuevoGrupo(@RequestBody Grupo grupo) {

		long id = nextId.incrementAndGet();
		grupo.setId(id);
		grupos.put(id, grupo);

		return grupo;
	}

	@PutMapping("/{id}")
	public static ResponseEntity<Grupo> actualizaGrupo(@PathVariable long id, @RequestBody Grupo grupoActualizado) {

		Grupo savedGrupo = grupos.get(grupoActualizado.getId());

		if (savedGrupo != null) {

			grupos.put(id, grupoActualizado);

			return new ResponseEntity<>(grupoActualizado, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Grupo> getGrupo(@PathVariable long id) {

		Grupo savedGrupo = grupos.get(id);

		if (savedGrupo != null) {
			return new ResponseEntity<>(savedGrupo, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	public static ResponseEntity<Grupo> borraGrupo(@PathVariable long id) {

		Grupo savedGrupo = grupos.get(id);

		if (savedGrupo != null) {
			grupos.remove(savedGrupo.getId());
			return new ResponseEntity<>(savedGrupo, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
