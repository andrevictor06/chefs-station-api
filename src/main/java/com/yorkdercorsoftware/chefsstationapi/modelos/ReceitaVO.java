package com.yorkdercorsoftware.chefsstationapi.modelos;

public class ReceitaVO {
	 private String id;
	 private String title;
	 private String image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eiNJH1JUNM0PsALtJplblxe5_iLrb04-QQ&usqp=CAU";
	 private String tempo;
	 
	 public ReceitaVO() {
		 
	}
	 
	public ReceitaVO(String id, String title, String image, String tempo) {
		super();
		this.id = id;
		this.title = title;
		this.image = image;
		this.tempo = tempo;
	}


	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getTempo() {
		return tempo;
	}
	public void setTempo(String tempo) {
		this.tempo = tempo;
	}
}
