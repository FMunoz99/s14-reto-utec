import Api from "@services/api";

export async function deleteProduct(id: string): Promise<void> {
    const api = await Api.getInstance();

    try {
        await api.delete({
            url: `/item/${id}`
        });
    } catch (error) {
        throw new Error(`Error al eliminar el producto: ${error}`);
    }
}
