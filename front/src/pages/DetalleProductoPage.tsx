import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductDetails } from '../services/producto/getProductoDetalle';  // Usamos ruta relativa
import { ProductDetailResponse } from '../interfaces/producto/ProductoDetalleResponse';  // Usamos ruta relativa

const DetalleProductoPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<ProductDetailResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            if (!id) {
                setError('El ID del producto no está definido.');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const productData = await getProductDetails(id);
                setProduct(productData);
                setError(null); // Limpiamos cualquier error previo
            } catch (error) {
                setError('Error al obtener los detalles del producto');
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    const handleAddToCart = () => {
        // Navegamos a la página del carrito
        navigate('/carrito');
    };

    const handleGoBack = () => {
        // Navegamos a la página de productos
        navigate('/productos');
    };

    return (
        <>
            {loading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p>{error}</p>
            ) : product ? (
                <div>
                    <h1>{product.title}</h1>
                    <p>Precio: ${product.price}</p>
                    <p>Compras en el último mes: {product.boughtInLastMonth}</p>
                    <p>Puntuación: {product.stars}/5</p>
                    <p>{product.isBestSeller ? 'Producto más vendido' : 'Producto regular'}</p>
                    <img src={product.imgUrl} alt={product.title} style={{ width: '200px', height: 'auto' }} />

                    <button onClick={handleAddToCart} style={{ margin: '10px', padding: '10px', backgroundColor: '#7955B4', color: '#FFF', border: 'none', borderRadius: '5px' }}>
                        Agregar al carrito
                    </button>
                    <button onClick={handleGoBack} style={{ margin: '10px', padding: '10px', backgroundColor: '#D9D9D9', color: '#292929', border: 'none', borderRadius: '5px' }}>
                        Volver
                    </button>
                </div>
            ) : (
                <p>Producto no encontrado</p>
            )}
        </>
    );
};

export default DetalleProductoPage;
