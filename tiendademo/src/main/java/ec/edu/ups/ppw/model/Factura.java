package ec.edu.ups.ppw.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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

import javax.json.*;



@Entity
public class Factura {
	
	private static final long serialVersionUID=1L;
	
	
	
	//User Rol
	
	@Id
	private int numero;
	private Date fecha;
	private double subtotal;
	private double iva;
	private double total;
	private boolean anulado;
	
	
	
	//Una Persona Tiene una factura 
	@OneToOne
	@JoinColumn(name="per_cedula")
	private Persona cliente;
	
	
	//Una Factura tiene Muchos Detalles
	
	@OneToMany( mappedBy = "factura", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnoreProperties("detallesList")
	//@JoinColumn(name="fac_numero")
	private List<FacturaDetalle> detallesList;
	
	
	

	public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
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
	public boolean isAnulado() {
		return anulado;
	}
	public void setAnulado(boolean anulado) {
		this.anulado = anulado;
	}
	public List<FacturaDetalle> getDetallesList() {
		return detallesList;
	}
	public void setDetallesList(List<FacturaDetalle> detallesList) {
		this.detallesList = detallesList;
	}
	
	public void addDetalle (FacturaDetalle detalle) {

        if (detallesList==null) {

        	detallesList =(new ArrayList<FacturaDetalle>());

        	detallesList.add(detalle);

        }
    }

	
	
	
	
	
	
	
	
	

	
	
	
	

}
