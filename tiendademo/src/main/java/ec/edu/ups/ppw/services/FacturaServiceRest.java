package ec.edu.ups.ppw.services;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import ec.edu.ups.ppw.model.Factura;
import ec.edu.ups.ppw.model.Producto;
import ec.edu.ups.ppw.on.GestionFacturaON;

@Path("factura")
public class FacturaServiceRest {
	
	
	@Inject
	private GestionFacturaON factOn;
	
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)// 
	@Produces(MediaType.APPLICATION_JSON)//"application/json"
	public Respuesta crearProducto(Factura factura) {
		//Guardad Factura

		Respuesta res=new Respuesta();
				
		try {
			
			factOn.guardarFactura(factura);
			res.setCodido(1);
			res.setMensaje("Ok Guardado Satisfactorio");
			return res;
		}catch (Exception e) {
			res.setCodido(99);
			res.setMensaje("Error al guardar");
			return res;
		}
	
	}
	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)//"application/json"
	//Trae todas las facturas
	public List<Factura> getFactura(){
		List<Factura> facturas = factOn.getFacturas();	
		return facturas;
	}
	
	

}
