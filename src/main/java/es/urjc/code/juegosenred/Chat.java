package es.urjc.code.juegosenred;

public class Chat {

	private long id;
	private String mensaje;
	private String hora;
	private String usuario;
	private String sala;

	public Chat() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}	

	public String getSala() {
		return sala;
	}

	public void setSala(String sala) {
		this.sala = sala;
	}

	public String getmensaje() {
		return mensaje; 
	}

	public void setmensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}

	@Override
	public String toString() {
		return "Item [id=" + id + ", mensaje=\" + mensaje + \", hora=\" + hora + \"]";
	}

	
}
