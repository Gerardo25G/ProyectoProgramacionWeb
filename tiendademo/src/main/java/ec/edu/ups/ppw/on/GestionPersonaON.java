package ec.edu.ups.ppw.on;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import ec.edu.ups.ppw.dao.PersonaDao;
import ec.edu.ups.ppw.model.Persona;

@Stateless 
public class GestionPersonaON {
	
	
	@Inject
	public PersonaDao daopersona;
	
	
	public void guardarPersona(Persona persona) {
		
		Persona p = daopersona.read(persona.getCedula());
		
		if(p==null)
			daopersona.insert(persona);
		else
			daopersona.update(persona);

	}
	
	public List<Persona> getPersonas(){
		return daopersona.getList();
	}
	
	public List<Persona> getPersonaPorNombre(String filtro){
		filtro="%"+filtro+"%";
		return daopersona.getListXNombre(filtro);
		
	}
	
	public Persona getPersona(String id) {
		Persona producto = daopersona.read(id);
		return producto;
	}
	
	public String eliminar(String id) {
		daopersona.delete(id);
		return "Eliminado";
	}

}
