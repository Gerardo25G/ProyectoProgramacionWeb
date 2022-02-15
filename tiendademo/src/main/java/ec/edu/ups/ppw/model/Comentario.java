package ec.edu.ups.ppw.model;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Comentario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	int id;
	private String descripcion;
	
	
	//Una Persona Tiene un Comentario 
	@OneToOne
	@JoinColumn(name="per_cedula")
	private Persona cliente;
	
	
	@JsonbTransient // javax.json.bind.annotation.JsonbTransient
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="pro_id")
	private Producto producto;
	


	public Comentario(int id, String descripcion, Persona cliente, Producto producto) {
		super();
		this.id = id;
		this.descripcion = descripcion;
		this.cliente = cliente;
		this.producto = producto;
	}


	public Comentario() {
		super();
		// TODO Auto-generated constructor stub
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getDescripcion() {
		return descripcion;
	}


	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}


	public Persona getCliente() {
		return cliente;
	}


	public void setCliente(Persona cliente) {
		this.cliente = cliente;
	}


	public Producto getProducto() {
		return producto;
	}


	public void setProducto(Producto producto) {
		this.producto = producto;
	}
	
	

}
