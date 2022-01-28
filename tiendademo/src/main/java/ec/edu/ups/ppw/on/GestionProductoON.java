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
	
	
	public void guardarPersona(Producto producto) {
		
		Producto porducto = daoproducto.read(producto.getNombre());
		
		if(producto==null)
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
	
	public Producto getProducto(String nombre) {
		Producto producto = daoproducto.read(nombre);
		return producto;
	}

}
