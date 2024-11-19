import Api from "@services/api";
import { ProductRequest } from "@interfaces/producto/ProductoRequest";
import { ProductResponse } from "@interfaces/producto/ProductoResponse";

export async function addProduct(data: ProductRequest): Promise<ProductResponse> {
    const api = await Api.getInstance();

    try {
        const response = await api.post<ProductRequest, ProductResponse>(data, {
            url: `/item`
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error al crear el producto: ${error}`);
    }
}
