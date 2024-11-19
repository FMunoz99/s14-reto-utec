import Api from '../api';

const api = await Api.getInstance();

export const removeCartItem = async (userId: string, itemId: string) => {
  try {
    const response = await api.delete({ url: `/carrito/${userId}/${itemId}` });
    return response.data;
  } catch (error) {
    console.error("Error al eliminar producto del carrito:", error);
    throw error;
  }
};