package es.urjc.code.juegosenred;

public class Version {

	private long id;
	private String description;

	public Version() { 
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Item [id=" + id + ", description=" + description + "]";
	}

}
