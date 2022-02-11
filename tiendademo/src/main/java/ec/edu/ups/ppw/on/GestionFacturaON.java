package ec.edu.ups.ppw.on;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import ec.edu.ups.ppw.dao.FacturaDao;
import ec.edu.ups.ppw.dao.FacturaDetallesDao;
import ec.edu.ups.ppw.model.Factura;
import ec.edu.ups.ppw.model.FacturaDetalle;


@Stateless 
public class GestionFacturaON {
	
	@Inject
	public FacturaDao daofactura;
	
	@Inject
	public FacturaDetallesDao daofacturaDetalle;
	
	
public Factura guardarFactura(Factura factura ) {
		
	Factura f = daofactura.read(factura.getNumero());
	
//	List<FacturaDetalle> detalle = factura.getDetallesList();
//	factura.setDetallesList(null);
		
		if(f==null)
			daofactura.insert(factura);
		else
			daofactura.update(factura);
	
//	for (FacturaDetalle det:detalle) {
//		det.setFac_numero(factura.getNumero());
//	}
//	daofacturaDetalle.insert(detalle);
//	factura.setDetallesList(detalle);
	
	return  factura;
	
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
