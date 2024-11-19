import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link de react-router-dom
import Paginacion from "../services/Paginacion/paginacion"; // Ajusta la ruta según corresponda

const ProductosPage: React.FC = () => {
  // Estado para almacenar los productos y la lastKey
  const [productos, setProductos] = useState<any[]>([]);
  const [lastKey, setLastKey] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [carrito, setCarrito] = useState<any[]>([]);

  // Función para cargar productos con paginación
  const cargarProductos = async () => {
    setLoading(true);
    setError(null);

    try {
      const limit = 5; // Limitar a 5 productos por página
      const paginacion = new Paginacion();

      // Llamamos al servicio de paginación
      const { items, lastKey: newLastKey } = await paginacion.obtenerItemsConPaginacion(limit, lastKey);

      // Depuración: Verifica los productos y la clave de paginación
      console.log("Respuesta de la API:", { items, lastKey: newLastKey });

      // Actualizamos el estado de los productos y la lastKey
      setProductos((prevProductos) => [...prevProductos, ...items]);
      setLastKey(newLastKey);

    } catch (err: any) {
      setError(`Hubo un error al cargar los productos: ${err.message}`);
      console.error("Error al cargar los productos:", err);
    } finally {
      setLoading(false);
    }
  };

  // Función para agregar producto al carrito
  const agregarAlCarrito = (producto: any) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  // Efecto que se ejecuta cuando se monta el componente para cargar los primeros productos
  useEffect(() => {
    cargarProductos();
  }, []); // Solo se ejecuta al montar el componente

  // Función para cargar más productos cuando se hace clic
  const cargarMas = () => {
    if (lastKey) {
      cargarProductos();
    }
  };

  // Función para mostrar el carrito
  const verCarrito = () => {
    alert(`Carrito: ${carrito.map((item) => item.name).join(', ')}`);
  };

  return (
    <div className="productos-container">
      <h1>Productos</h1>

      {loading && <p>Cargando productos...</p>}
      {error && <p className="error-message">{error}</p>}

      <div>
        {productos.length > 0 ? (
          <table className="productos-table">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>ASIN</th>
                <th>Compras en el último mes</th>
                <th>Best Seller</th>
                <th>Enlace</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, index) => (
                <tr key={index}>
                  <td>{producto.categoryName}</td>
                  <td>{producto.asin}</td>
                  <td>{producto.boughtInLastMonth}</td>
                  <td>{producto.isBestSeller ? 'Sí' : 'No'}</td>
                  <td>
                    {/* Usamos Link para navegar a detalleProducto con el ASIN como id */}
                    <Link to={`/detalleProducto/${producto.asin}`} target="_blank">
                      Ver producto
                    </Link>
                  </td>
                  <td>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      Agregar al carrito
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>

      {lastKey && !loading && (
        <button className="load-more-btn" onClick={cargarMas}>Cargar más productos</button>
      )}

      {carrito.length > 0 && (
        <button className="view-cart-btn" onClick={verCarrito}>Ver carrito</button>
      )}
    </div>
  );
};

export default ProductosPage;
