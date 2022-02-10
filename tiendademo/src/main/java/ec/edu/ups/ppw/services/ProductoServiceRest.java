package ec.edu.ups.ppw.services;

import javax.jws.WebService;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import java.util.List;

import javax.inject.Inject;
import javax.jws.WebMethod;


import ec.edu.ups.ppw.model.Producto;
import ec.edu.ups.ppw.on.GestionProductoON;


@Path("productos")
public class ProductoServiceRest {
	
	@Inject
	private GestionProductoON ProdOn;
	
	//CArgar o transaccion algo con post
	//Devuelva los datos a poner algo con el get
	

	@POST
	@Consumes(MediaType.APPLICATION_JSON)// 
	@Produces(MediaType.APPLICATION_JSON)//"application/json"
	public Respuesta crearProducto(Producto producto) {
		//instrucciones de la funcionalidad

		Respuesta res=new Respuesta();
				
		try {
			
			ProdOn.guardarProducto(producto);
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
	public List<Producto> getProducto(){
		List<Producto> productos = ProdOn.getProductos();
		
		return productos;
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)//"application/json"
	@Path("edit/{id}")
	public Producto getProductot(@PathParam("id") int id){
		Producto producto = ProdOn.getProducto(id);
		return producto;
	}
	
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)// 
	@Produces(MediaType.APPLICATION_JSON)//"application/json"
	public void actualizarProducto(Producto producto) {
		//instrucciones de la funcionalidad
		try {
			ProdOn.guardarProducto(producto);
		}catch (Exception e) {

		}
	
	}
	
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)//"application/json"
	@Path("delete/{id}")
	public void EliminarProducto(@PathParam("id") int id) {
		//instrucciones de la funcionalidad
		System.out.println("dasdasd " +id);
		ProdOn.eliminar(id);

	}
	
	

}
