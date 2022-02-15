package ec.edu.ups.ppw.dao;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import ec.edu.ups.ppw.model.Factura;
import ec.edu.ups.ppw.model.Producto;


@Stateless
public class ProductoDao {
	
	@PersistenceContext
//	private EntityManagerFactory emf = Persistence.createEntityManagerFactory("producto");
//    private EntityManager em = emf.createEntityManager();
	private EntityManager em;
	
	private static EntityManagerFactory emf= Persistence.createEntityManagerFactory("tiendademoPersistenceUnit");
	
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

		em=emf.createEntityManager();
		List<Producto> productos= new ArrayList<Producto>();
		
		//Factura fac = em.find(Factura.class,1);
		
		//System.out.println("sadasd " + fac.getSubtotal() );
		
		//String jpql="Select p From Factura p ";
		for(int i=1; i<=getCountID(); i++) {
			Producto pro = em.find(Producto.class,i);	
			productos.add(pro);
		}
		return productos;
		
	}
	
	public List<Producto> getListXNombre(String filtro){
		String jpql="SELECT p FROM producto p "+
					"WHERE nombre LIKE ?1";
		
		Query q = em.createQuery(jpql, Producto.class);
		q.setParameter(1,filtro);
		return q.getResultList();
	}
	
	
	public long getCountID(){
		String jpql="Select Count(id) From Producto a ";
		em=emf.createEntityManager();

		long q = (long) em.createQuery(jpql).getSingleResult();
		
		return q;
	}
	

}
