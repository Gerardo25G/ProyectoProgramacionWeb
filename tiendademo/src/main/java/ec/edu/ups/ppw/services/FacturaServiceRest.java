package ec.edu.ups.ppw.services;

import java.io.IOException;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.json.bind.annotation.JsonbTransient;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.json.bind.Jsonb;
import javax.json.bind.JsonbBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import ec.edu.ups.ppw.dao.FacturaDetallesDao;
import ec.edu.ups.ppw.model.Factura;
import ec.edu.ups.ppw.model.FacturaDetalle;
import ec.edu.ups.ppw.model.Producto;
import ec.edu.ups.ppw.on.GestionFacturaON;
import ec.edu.ups.ppw.on.GestionProductoON;



@Path("factura")
public class FacturaServiceRest {
	
	
	@Inject
	private GestionFacturaON factOn;
	
	@Inject
	private GestionProductoON proON;

	

	@POST
	@Consumes(MediaType.APPLICATION_JSON)// 
	@Produces(MediaType.APPLICATION_JSON)//"application/json"
	public Respuesta crearFactura(Factura factura) {
				//Guardad Factura
		
		Respuesta res=new Respuesta();

		System.out.println("Hola Factura ");// + factura.getNumero());
		
//		for(int i=0; i<=factura.getDetallesList().size() ; i++) {
//			System.out.println("Vamos" + factura.getDetallesList().get(i));
//		}
		
//		if(factura.getDetallesList()==null) {
//			System.out.println("Holas");
//		}else
//			System.out.println("ddsasdasdasd");
				
//		try {
//			
//			//factOn.guardarFactura(factura);
//			res.setCodido(1);
//			res.setMensaje("Ok Guardado Satisfactorio");
//			return res;
//		}catch (Exception e) {
//			res.setCodido(99);
//			res.setMensaje("Error al guardar");
//			return res;
//		}
		
		return res ;
	
	}
	
//	@POST
//	@Consumes(MediaType.APPLICATION_JSON)// 
//	@Produces(MediaType.APPLICATION_JSON)//"application/json"
//	@Path("detalle")
//	public Respuesta Detalles(String detalle) {
//		//Guardad Factura
//		
//		Respuesta res=new Respuesta();
//        
//		Gson gson = new Gson();
//        FacturaDetalle[] detalles = gson.fromJson(detalle,FacturaDetalle[].class); 
//        
//        //System.out.println("asdasd " + detalles);
//		
//		for(int i=0; i<=detalles.length ; i++) {
//			
//			System.out.println("Vamos" + detalles[i]);
//		}
////		
////		if(factura.getDetallesList()==null) {
////			System.out.println("Holas");
////		}else
////			System.out.println("ddsasdasdasd");
//				
//		try {
//			
//			//factOn.guardarFactura(factura);
//			res.setCodido(1);
//			res.setMensaje("Ok Guardado Satisfactorio");
//			return res;
//		}catch (Exception e) {
//			res.setCodido(99);
//			res.setMensaje("Error al guardar");
//			return res;
//		}
//	
//	}
	

	
	@GET
	@Produces(MediaType.APPLICATION_JSON)//"application/json"
	@JsonbTransient
	//Trae todas las facturas
	public List<Factura> getFactura(){
		List<Factura> facturas = factOn.getFacturas();	
		return facturas;
	}
	


}
