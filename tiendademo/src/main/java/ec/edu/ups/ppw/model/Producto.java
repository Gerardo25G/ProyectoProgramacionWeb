  package ec.edu.ups.ppw.model;

import java.util.List;

import javax.annotation.Generated;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Producto {
	
	
	private static final long serialVersionUID=1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	int id;
	private String nombre;
	private String descripcion;
	private String color;
	private String marca;
	private int cantidad;
	private double precio;
	private String imagen;
	
	@OneToMany( mappedBy = "producto", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnoreProperties("detallesProducto")
	//@JoinColumn(name="fac_numero")
	private List<Comentario> detallesProducto;
	

	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public int getCantidad() {
		return cantidad;
	}
	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
	public double getPrecio() {
		return precio;
	}
	public void setPrecio(double precio) {
		this.precio = precio;
	}
	public String getImagen() {
		return imagen;
	}
	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
//	public List<Comentario> getDetallesProducto() {
//		return detallesProducto;
//	}
//	public void setDetallesProducto(List<Comentario> detallesProducto) {
//		this.detallesProducto = detallesProducto;
//	}
	
	
	


	
	
	
	
	

}
