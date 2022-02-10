package ec.edu.ups.ppw.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import ec.edu.ups.ppw.model.Factura;

@Stateless
public class FacturaDao {
	
	@PersistenceContext
	private EntityManager em;
	
	public void insert(Factura p) {
		
		em.persist(p);
		
	}
	
	public void update(Factura p) {
		
		em.merge(p);
		
	}
	
	public Factura read(int cedula) {
		Factura p = em.find(Factura.class, cedula);
		return p;
	}
	
	public void delete(int cedula) {
		Factura p = em.find(Factura.class, cedula);
		em.remove(p);
	}
	
	public List<Factura> getList(){
		String jpql="Select p From Factura p";
		
		Query q = em.createQuery(jpql, Factura.class);
		return q.getResultList();
	}

}
