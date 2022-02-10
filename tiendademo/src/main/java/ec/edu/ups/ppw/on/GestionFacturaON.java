package ec.edu.ups.ppw.on;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import ec.edu.ups.ppw.dao.FacturaDao;
import ec.edu.ups.ppw.model.Factura;


@Stateless 
public class GestionFacturaON {
	
	@Inject
	public FacturaDao daofactura;
	
	
public void guardarFactura(Factura factura) {
		
	Factura f = daofactura.read(factura.getNumero());
	
	List<FacturaDetalle> detalle = factura.getDetalles()
		
		if(f==null)
			daofactura.insert(factura);
		else
			daofactura.update(factura);

	}
	
	public List<Factura> getFacturas(){
		return daofactura.getList();
	}
	
	
	public Factura getFactura(int id) {
		Factura factura = daofactura.read(id);
		return factura;
	}
	
	public String eliminar(int id) {
		daofactura.delete(id);
		return "Eliminado";
	}
	
	

}
