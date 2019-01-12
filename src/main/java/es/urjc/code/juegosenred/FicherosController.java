package es.urjc.code.juegosenred;

import java.io.FileWriter;
import java.io.IOException;
import java.io.FileReader;
import java.io.BufferedReader;

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
@RequestMapping("/ficheros")
public class FicherosController {
	
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public void addUser(@RequestBody Item item) {

		String ficheroUserAndPassword = "";
		String lineaBR = "";
		String usuarioNuevo = item.userAndPassword();
		boolean listaVacia = false;
		
		try {
			FileReader fr = new FileReader("usuarios.txt");
			BufferedReader br = new BufferedReader(fr);
			while( (lineaBR = br.readLine()) != null) {
				ficheroUserAndPassword += lineaBR + "\r\n";
			}
			br.close();
			
		}catch(IOException ex) {
			
			System.out.println("No esta creado el fichero usuarios.txt");
			listaVacia = true;
		}
		
		
		try {
			
			FileWriter fw = new FileWriter("usuarios.txt");
			if(listaVacia) {
				
				fw.write(usuarioNuevo);
				listaVacia = false;
				
			}else {
				
				fw.write(ficheroUserAndPassword + usuarioNuevo);
			}
			fw.close();
			
		}catch(Exception ex) { ex.printStackTrace();}
	}
	
	@GetMapping(value = "/{partes}")
	public String[] getUsersAndPasswords() {
		
		String ficheroUserAndPassword = "";
		String lineaBR = "";
		String[] listaDeUsuarios = new String[1];
		
		try {
			FileReader fr = new FileReader("usuarios.txt");
			BufferedReader br = new BufferedReader(fr);
			while( (lineaBR = br.readLine()) != null) {
				ficheroUserAndPassword += lineaBR + " ";
			}
			br.close();
			
			String[] usuarios = ficheroUserAndPassword.split(" ");
			ficheroUserAndPassword = "";
			
			for(int i = 0; i < usuarios.length; i++) {
				
				if(!usuarios[i].equals("User:") && !usuarios[i].equals("Password:")) {
					ficheroUserAndPassword += (usuarios[i] + " ");
				}
			}
			
			usuarios = ficheroUserAndPassword.split(" ");
			
			listaDeUsuarios = usuarios;
			
				
			
		}catch(IOException ex) {
			
			System.out.println("No esta creado el fichero usuarios.txt");
		}
		
		return listaDeUsuarios;
	}

}
