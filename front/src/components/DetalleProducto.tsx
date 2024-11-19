import React, { useEffect, useState } from "react";
import { addProduct } from "@services/producto/addProducto";
import { getProductDetails } from "@services/producto/getProductoDetalle";
import { deleteProduct } from "@services/producto/deleteProducto";
import { updateProduct } from "@services/producto/updateProducto";
import { ProductDetailResponse } from "@interfaces/producto/ProductoDetalleResponse";

const ProductDetail = ({ id }: { id: string }) => {
    const [product, setProduct] = useState<ProductDetailResponse | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getProductDetails(id);
                setProduct(productData);
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message);
                } else {
                    console.error("An unknown error occurred.");
                }
            }
        };
        fetchProduct();
    }, [id]);

    return (
        <div>
            {product ? (
                <>
                    <h1>{product.title}</h1>
                    <p>Precio: {product.price}</p>
                    <p>Estrellas: {product.stars}</p>
                    <p>{product.isBestSeller ? "Best Seller" : "Regular"}</p>
                    <img src={product.imgUrl} alt={product.title} />
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default ProductDetail;
