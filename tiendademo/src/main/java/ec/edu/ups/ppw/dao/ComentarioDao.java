package ec.edu.ups.ppw.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import ec.edu.ups.ppw.model.Comentario;
import ec.edu.ups.ppw.model.Producto;

@Stateless
public class ComentarioDao {
	
	
	@PersistenceContext
//	private EntityManagerFactory emf = Persistence.createEntityManagerFactory("producto");
//    private EntityManager em = emf.createEntityManager();
	private EntityManager em;
	
	public void insert(Comentario comentario) {
		em.persist(comentario);
	}
	
	public void update(Comentario comentario) {
		em.merge(comentario);
	}
	
	public Comentario read(int id) {
		Comentario producto = em.find(Comentario.class, id);
		return producto;
	}
	
	public void delete(int id) {
		Comentario comentario = em.find(Comentario.class, id);
		em.remove(comentario);
	}
	
	public List<Comentario> getList(){
		String jpql="Select p From Comentario p";
		
		Query q = em.createQuery(jpql, Comentario.class);
		
		return q.getResultList();
	}
	
	public List<Comentario> getList(int id){
		String jpql="Select p From Comentario p Where pro_id = 1?";
		
		Query q = em.createQuery(jpql, Comentario.class);
		
		return q.getResultList();
	}
	

}
