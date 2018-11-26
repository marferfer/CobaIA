package es.urjc.code.juegosenred;

public class Grupo {

	private long id;
	private String usuario1;
	private String usuario2;
	private String usuario3;
	private String nombre;
	private String password;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Grupo() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsuario1() {
		return usuario1;
	}

	public void setUsuario1(String usuario1) {
		this.usuario1 = usuario1;
	}

	public String getUsuario2() {
		return usuario2;
	}

	public void setUsuario2(String usuario2) {
		this.usuario2 = usuario2;
	}

	public String getUsuario3() {
		return usuario3;
	}

	public void setUsuario3(String usuario3) {
		this.usuario3 = usuario3;
	}

	@Override
	public String toString() {		
		return "Item [id=" + id + ", usuarios=" + usuario1 + "]";
	}

}
