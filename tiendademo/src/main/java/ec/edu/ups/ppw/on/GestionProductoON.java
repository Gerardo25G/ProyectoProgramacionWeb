package ec.edu.ups.ppw.on;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import ec.edu.ups.ppw.dao.ProductoDao;
import ec.edu.ups.ppw.model.Producto;

@Stateless 
public class GestionProductoON {
	
	@Inject
	public ProductoDao daoproducto;
	
	
	public void guardarProducto(Producto producto) {
		
		Producto p = daoproducto.read(producto.getId());
		
		if(p==null)
			daoproducto.insert(producto);
		else
			daoproducto.update(producto);

	}
	
	public List<Producto> getProductos(){
		return daoproducto.getList();
	}
	
	public List<Producto> getProductosPorNombre(String filtro){
		filtro="%"+filtro+"%";
		return daoproducto.getListXNombre(filtro);
		
	}
	
	public Producto getProducto(int id) {
		Producto producto = daoproducto.read(id);
		return producto;
	}
	
	public String eliminar(int id) {
		daoproducto.delete(id);
		return "Eliminado";
	}
	

}
