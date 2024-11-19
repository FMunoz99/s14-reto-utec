import Api from "../api.ts";
import { ProductDetailResponse } from "@interfaces/producto/ProductoDetalleResponse";

export async function getProductDetails(id: string): Promise<ProductDetailResponse> {
    const api = await Api.getInstance();

    try {
        const response = await api.get<void, ProductDetailResponse>({
            url: `/item/${id}`
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener los detalles del producto: ${error}`);
    }
}
