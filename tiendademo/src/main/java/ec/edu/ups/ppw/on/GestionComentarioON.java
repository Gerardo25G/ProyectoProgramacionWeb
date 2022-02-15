package ec.edu.ups.ppw.on;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import ec.edu.ups.ppw.dao.ComentarioDao;
import ec.edu.ups.ppw.dao.ProductoDao;
import ec.edu.ups.ppw.model.Comentario;
import ec.edu.ups.ppw.model.Producto;

@Stateless 
public class GestionComentarioON {
	
	
	@Inject
	public ComentarioDao daocomentario;
	
	
	public void guardarComentario(Comentario comentario) {
		
		Comentario p = daocomentario.read(comentario.getId());
		
		if(p==null)
			daocomentario.insert(comentario);
		else
			daocomentario.update(comentario);

	}
	
	public List<Comentario> getComentarios(){
		return daocomentario.getList();
	}
	
//	public List<Producto> getProductosPorNombre(String filtro){
//		filtro="%"+filtro+"%";
//		return daocomentario.getListXNombre(filtro);
//		
//	}
	
	public Comentario getProducto(int id) {
		Comentario comentario = daocomentario.read(id);
		return comentario;
	}
	
	public String eliminar(int id) {
		daocomentario.delete(id);
		return "Eliminado";
	}
	

}
