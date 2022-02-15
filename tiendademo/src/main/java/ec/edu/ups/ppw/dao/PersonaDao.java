package ec.edu.ups.ppw.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import ec.edu.ups.ppw.model.Persona;

@Stateless
public class PersonaDao {
	
	
	@PersistenceContext
//	private EntityManagerFactory emf = Persistence.createEntityManagerFactory("producto");
//    private EntityManager em = emf.createEntityManager();
	private EntityManager em;
	
	public void insert(Persona persona) {
		em.persist(persona);
	}
	
	public void update(Persona persona) {
		em.merge(persona);
	}
	
	public Persona read(String id) {
		Persona persona = em.find(Persona.class, id);
		return persona;
	}
	
	public void delete(String id) {
		Persona persona = em.find(Persona.class, id);
		em.remove(persona);
	}
	
	public List<Persona> getList(){
		String jpql="Select p From Persona p";
		
		Query q = em.createQuery(jpql, Persona.class);
		
		return q.getResultList();
	}
	
	public List<Persona> getListXNombre(String filtro){
		String jpql="SELECT p FROM persona p "+
					"WHERE nombre LIKE ?1";
		
		Query q = em.createQuery(jpql, Persona.class);
		q.setParameter(1,filtro);
		return q.getResultList();
	}
	

}
