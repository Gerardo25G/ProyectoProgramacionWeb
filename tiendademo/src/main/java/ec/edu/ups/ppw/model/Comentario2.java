package ec.edu.ups.ppw.model;

import com.google.gson.JsonElement;

public class Comentario2 {
	
	private String descripcion;
	private int id_producto;
	private String cedula;
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public int getId_producto() {
		return id_producto;
	}
	public void setId_producto(int id_producto) {
		this.id_producto = id_producto;
	}
	public String getCedula() {
		return cedula;
	}
	public void setCedula(String cedula) {
		this.cedula = cedula;
	}
	public Comentario2(String descripcion, int id_producto, String cedula) {
		super();
		this.descripcion = descripcion;
		this.id_producto = id_producto;
		this.cedula = cedula;
	}
	public Comentario2() {
		super();
	}

	
	
	

	
	

}
