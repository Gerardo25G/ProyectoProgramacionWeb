package ec.edu.ups.ppw.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import ec.edu.ups.ppw.model.FacturaDetalle;



@Stateless
public class FacturaDetallesDao {
	
	@PersistenceContext
	private EntityManager em;
	
	public void insert(List<FacturaDetalle> detalle) {
		
		em.persist(detalle);
		
	}
	
	public void update(FacturaDetalle fd) {
		
		em.merge(fd);
		
	}
	
	public FacturaDetalle read(int cedula) {
		FacturaDetalle fd = em.find(FacturaDetalle.class, cedula);
		return fd;
	}
	
	public void delete(int cedula) {
		FacturaDetalle fd = em.find(FacturaDetalle.class, cedula);
		em.remove(fd);
	}
	
	public List<FacturaDetalle> getList(){
		String jpql="Select p From FacturaDetalle p";
		
		Query q = em.createQuery(jpql, FacturaDetalle.class);
		return q.getResultList();
	}

}
