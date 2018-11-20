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
@RequestMapping("/versions")
public class VersionsControler {

	Map<Long, Version> versions = new ConcurrentHashMap<>(); 
	AtomicLong nextId = new AtomicLong(0);
	
	@GetMapping
	public Collection<Version> versions() {
		return versions.values();
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Version nuevaVersion(@RequestBody Version version) {

		long id = nextId.incrementAndGet();
		version.setId(id);
		versions.put(id, version);

		return version;
	}

	@PutMapping("/{id}")
	public ResponseEntity<Version> actulizaVersion(@PathVariable long id, @RequestBody Version versionActualizada) {

		Version savedVersion = versions.get(versionActualizada.getId());

		if (savedVersion != null) {

			versions.put(id, versionActualizada);

			return new ResponseEntity<>(versionActualizada, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Version> getVersion(@PathVariable long id) {

		Version savedVersion = versions.get(id);

		if (savedVersion != null) {
			return new ResponseEntity<>(savedVersion, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Version> borraVersion(@PathVariable long id) {

		Version savedVersion = versions.get(id);

		if (savedVersion != null) {
			versions.remove(savedVersion.getId());
			return new ResponseEntity<>(savedVersion, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
