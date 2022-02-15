package ec.edu.ups.ppw.model;

import java.util.List;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;




@Entity
public class FacturaDetalle {
	
	private static final long serialVersionUID=1L;
	
	//Usuario
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int codigo;
	private int cantidad;
	private double precio;
	private double subtotal;
	private double iva;
	private double total;
	
	
	@OneToOne
	@JoinColumn(name="pro_codigo")
	private Producto producto;
	
	@JsonbTransient // javax.json.bind.annotation.JsonbTransient
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="fac_numero")
	private Factura factura;
	

	

	public FacturaDetalle() {
		super();
	}


	public int getCodigo() {
		return codigo;
	}


	public void setCodigo(int codigo) {
		this.codigo = codigo;
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


	public double getSubtotal() {
		return subtotal;
	}


	public void setSubtotal(double subtotal) {
		this.subtotal = subtotal;
	}


	public double getIva() {
		return iva;
	}


	public void setIva(double iva) {
		this.iva = iva;
	}


	public double getTotal() {
		return total;
	}


	public void setTotal(double total) {
		this.total = total;
	}


	public Producto getProducto() {
		return producto;
	}


	public void setProducto(Producto producto) {
		this.producto = producto;
	}

	public Factura getFactura() {
		return factura;
	}


	public void setFactura(Factura factura) {
		this.factura = factura;
	}


	@Override
	public String toString() {
		return "FacturaDetalle [codigo=" + codigo + ", cantidad=" + cantidad + ", precio=" + precio + ", subtotal="
				+ subtotal + ", iva=" + iva + ", total=" + total + ", producto=" + producto + ", factura=" + factura
				+ "]";
	}
	
	



	
	
	
	
	
	

}
