package ec.edu.ups.ppw.services;

import java.io.IOException;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.*;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.*;

import ec.edu.ups.ppw.dao.ComentarioDao;
import ec.edu.ups.ppw.model.Comentario;
import ec.edu.ups.ppw.model.Comentario2;
import ec.edu.ups.ppw.model.Producto;
import ec.edu.ups.ppw.on.GestionComentarioON;
import ec.edu.ups.ppw.on.GestionPersonaON;
import ec.edu.ups.ppw.on.GestionProductoON;

@Path("comentarios")
public class ComentarioServiceRest {
	
	@Inject
	private GestionComentarioON ComOn;
	
	@Inject
	private GestionProductoON proOn;
	
	@Inject
	private GestionPersonaON perOn;
	
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)// 
	@Produces(MediaType.APPLICATION_JSON)//"application/json"
	public Respuesta crearComentario(String comentario) throws JsonProcessingException, IOException  {
		//instrucciones de la funcionalidad

		Respuesta res=new Respuesta();

		try {
			ObjectMapper mapper = new ObjectMapper();
	        JsonNode node = mapper.readTree(comentario);
	        String name = node.get("descripcion").asText();
	        String place = node.get("persona").asText();
	        String place1 = node.get("producto1").asText();
	        int a= Integer.parseInt(place1);
	        
	        Comentario2 comenta =new Comentario2(name, a, place);
	        System.out.println(comentario);
	        
	        Comentario comentarioPropio = new Comentario();
	        
	        comentarioPropio.setDescripcion(comenta.getDescripcion());
	        comentarioPropio.setProducto(proOn.getProducto(comenta.getId_producto()));
	        comentarioPropio.setCliente(perOn.getPersona(comenta.getCedula()));
			
			ComOn.guardarComentario(comentarioPropio);
			
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
	public List<Comentario> getComentario(){
		List<Comentario> comentarios = ComOn.getComentarios();
		return comentarios;
	}

}
