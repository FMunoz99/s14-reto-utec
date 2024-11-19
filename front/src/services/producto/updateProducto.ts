import Api from "@services/api";
import { ProductRequest } from "@interfaces/producto/ProductoRequest";
import { ProductResponse } from "@interfaces/producto/ProductoResponse";

export async function updateProduct(id: string, data: ProductRequest): Promise<ProductResponse> {
    const api = await Api.getInstance();

    try {
        const response = await api.put<ProductRequest, ProductResponse>(data, {
            url: `/item/${id}`
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error al actualizar el producto: ${error}`);
    }
}
