package ec.edu.ups.ppw.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import ec.edu.ups.ppw.model.Producto;


@Stateless
public class ProductoDao {
	
	@PersistenceContext
//	private EntityManagerFactory emf = Persistence.createEntityManagerFactory("producto");
//    private EntityManager em = emf.createEntityManager();
	private EntityManager em;
	
	public void insert(Producto producto) {
		em.persist(producto);
	}
	
	public void update(Producto producto) {
		em.merge(producto);
	}
	
	public Producto read(int id) {
		Producto producto = em.find(Producto.class, id);
		return producto;
	}
	
	public void delete(int id) {
		Producto producto = em.find(Producto.class, id);
		em.remove(producto);
	}
	
	public List<Producto> getList(){
		String jpql="Select p From Producto p";
		
		Query q = em.createQuery(jpql, Producto.class);
		
		return q.getResultList();
	}
	
	public List<Producto> getListXNombre(String filtro){
		String jpql="SELECT p FROM producto p "+
					"WHERE nombre LIKE ?1";
		
		Query q = em.createQuery(jpql, Producto.class);
		q.setParameter(1,filtro);
		return q.getResultList();
	}
	

}
