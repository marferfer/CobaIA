package es.urjc.code.juegosenred;

public class Grupo {

	private long id;
	private String usuario1;
	private String usuario2;
	private String usuario3;
	private String nombre;
	private String password;
	private String tanka = "";
	private String tali = "";
	private String acro = "";
	private boolean tankaReady = false;
	private boolean taliReady = false;
	private boolean acroReady = false;
	private long gameId;
	

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
	
	public void removeUser1() {
		usuario1 = null;
	}

	public String getUsuario2() {
		return usuario2;
	}

	public void setUsuario2(String usuario2) {
		this.usuario2 = usuario2;
	}
	
	public void removeUser2() {
		usuario2 = null;
	}

	public String getUsuario3() {
		return usuario3;
	}

	public void setUsuario3(String usuario3) {
		this.usuario3 = usuario3;
	}
	
	public void removeUser3() {
		usuario3 = null;
	}

	public String getTanka() {
		return tanka;
	}

	public void setTanka(String tanka) {
		this.tanka = tanka;
	}

	public String getTali() {
		return tali;
	}

	public void setTali(String tali) {
		this.tali = tali;
	}

	public String getAcro() {
		return acro;
	}

	public void setAcro(String acro) {
		this.acro = acro;
	}

	public boolean isTankaReady() {
		return tankaReady;
	}

	public void setTankaReady(boolean tankaReady) {
		this.tankaReady = tankaReady;
	}

	public boolean isTaliReady() {
		return taliReady;
	}

	public void setTaliReady(boolean taliReady) {
		this.taliReady = taliReady;
	}

	public boolean isAcroReady() {
		return acroReady;
	}

	public void setAcroReady(boolean acroReady) {
		this.acroReady = acroReady;
	}

	public long getGameId() {
		return gameId;
	}

	public void setGameId(long gameId) {
		this.gameId = gameId;
	}

	@Override
	public String toString() {		
		return "Item [id=" + id + ", usuarios=" + usuario1 + "]";
	}

}
