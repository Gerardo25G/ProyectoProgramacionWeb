package ec.edu.ups.ppw.services;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import ec.edu.ups.ppw.model.Persona;
import ec.edu.ups.ppw.model.Producto;
import ec.edu.ups.ppw.on.GestionPersonaON;
import ec.edu.ups.ppw.on.GestionProductoON;

@Path("personas")
public class PersonaServiceRest {
	
	@Inject
	private GestionPersonaON PerOn;
	
	
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)// 
	@Produces(MediaType.APPLICATION_JSON)//"application/json"
	public Respuesta crearProducto(Persona persona) {
		//instrucciones de la funcionalidad

		Respuesta res=new Respuesta();
				
		try {
			
			PerOn.guardarPersona(persona);
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
	public List<Persona> getPersona(){
		List<Persona> personas = PerOn.getPersonas();
		return personas;
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)//"application/json"
	@Path("edit/{id}")
	public Persona getPersona(@PathParam("id") String id){
		Persona persona = PerOn.getPersona(id);
		return persona;
	}
	
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)// 
	@Produces(MediaType.APPLICATION_JSON)//"application/json"
	public void actualizarPersona(Persona persona) {
		//instrucciones de la funcionalidad
		try {
			PerOn.guardarPersona(persona);
		}catch (Exception e) {

		}
	
	}
	
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)//"application/json"
	@Path("delete/{id}")
	public void EliminarPersona(@PathParam("id") String id) {
		//instrucciones de la funcionalidad
		System.out.println("dasdasd " +id);
		
		PerOn.eliminar(id);
	}

}
