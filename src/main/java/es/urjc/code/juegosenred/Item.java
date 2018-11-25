package es.urjc.code.juegosenred;

public class Item {

	private long id;
	private String description;
	private boolean checked;
	private String password;

	public Item() {
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

	public boolean getChecked() {
		return checked;
	}

	public void setChecked(boolean checked) {
		this.checked = checked;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}

	public String userAndPassword() {
		return "User: " + description + " " + "Password: " + password;
	}
	
	@Override
	public String toString() {
		return "Item [id=" + id + ", description=" + description + ", checked=" + checked + "]";
	}

}
