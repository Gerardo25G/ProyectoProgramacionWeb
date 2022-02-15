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
import ec.edu.ups.ppw.model.FacturaDetalle;

@Stateless
public class FacturaDao {
	
	@PersistenceContext
	private EntityManager em;
	
	private static EntityManagerFactory emf= Persistence.createEntityManagerFactory("tiendademoPersistenceUnit");
	
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
		em=emf.createEntityManager();
		List<Factura> facturas= new ArrayList<Factura>();
		
		//Factura fac = em.find(Factura.class,1);
		
		//System.out.println("sadasd " + fac.getSubtotal() );
		
		//String jpql="Select p From Factura p ";
		for(int i=1; i<=getCountID(); i++) {
			Factura fac = em.find(Factura.class,i);	
			facturas.add(fac);
		}

//		List<FacturaDetalle> detallesList= fac.getDetallesList();
//		
//		for(FacturaDetalle detalle: detallesList) {
//			System.out.println("asdasd"+ detalle.toString());
//		}
		//System.out.println("dasdasdEEEEEE"  + getList1());
		return facturas;
	}
	
	
	public long getCountID(){
		String jpql="Select Count(numero) From Factura a ";
		em=emf.createEntityManager();
		
		
		long q = (long) em.createQuery(jpql).getSingleResult();
		System.out.println("asdasd  "+ q);
		
		return q;
	}
	
	public List<FacturaDetalle> getListDetalle(){
		String jpql="Select a From FacturaDetalle a  Where fac_numero =?1";
		
		Query q = em.createQuery(jpql, FacturaDetalle.class)
				.setParameter(1,1);
		return q.getResultList();
	}
	

}
