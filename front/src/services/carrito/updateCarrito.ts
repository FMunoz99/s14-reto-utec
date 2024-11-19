import Api from '../api';

const api = await Api.getInstance();

export const updateCartItem = async (userId: string, itemId: string, quantity: number) => {
  try {
    const response = await api.put<{ userId: string; itemId: string; quantity: number }, { message: string }>(
      { userId, itemId, quantity },
      { url: '/carrito' }
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la cantidad del producto en el carrito:", error);
    throw error;
  }
};