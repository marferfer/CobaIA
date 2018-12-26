package es.urjc.code.juegosenred;

public class GameState {

	private long id;
	private int tankaX;
	private int tankaY;
	private int taliX;
	private int taliY;
	private int acroX;
	private int acroY;

	public GameState() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getTankaX() {
		return tankaX;
	}

	public void setTankaX(int tankaX) {
		this.tankaX = tankaX;
	}

	public int getTankaY() {
		return tankaY;
	}

	public void setTankaY(int tankaY) {
		this.tankaY = tankaY;
	}

	public int getTaliX() {
		return taliX;
	}

	public void setTaliX(int taliX) {
		this.taliX = taliX;
	}

	public int getTaliY() {
		return taliY;
	}

	public void setTaliY(int taliY) {
		this.taliY = taliY;
	}

	public int getAcroX() {
		return acroX;
	}

	public void setAcroX(int acroX) {
		this.acroX = acroX;
	}

	public int getAcroY() {
		return acroY;
	}

	public void setAcroY(int acroY) {
		this.acroY = acroY;
	}

	@Override
	public String toString() {		
		return "GameState [id=" + id + "]";
	}

}
