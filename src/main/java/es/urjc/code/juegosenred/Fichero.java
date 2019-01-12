package es.urjc.code.juegosenred;

public class Fichero {

	private String rutaUsersPasswords = "usuarios.txt";
	private String rutaChats = "";
	private String[] partes;
	
	public String getRutaUsersPasswords() {
		return this.rutaUsersPasswords;
	}
	
	public void setRutaUsersPasswords(String ruta) {
		this.rutaUsersPasswords = ruta;
	}
	
	public String getRutaChats() {
		return this.rutaChats;
	}
	
	public void setRutaChats(String ruta) {
		this.rutaChats = ruta;
	}
}
