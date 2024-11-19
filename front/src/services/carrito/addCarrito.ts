import Api from '../api';

const api = await Api.getInstance();

export const addItemToCart = async (userId: string, itemId: string, quantity: number) => {
  try {
    const response = await api.put<{ userId: string; itemId: string; quantity: number }, { message: string }>(
      { userId, itemId, quantity },
      { url: '/carrito' }
    );
    return response.data;
  } catch (error) {
    console.error("Error al agregar producto al carrito:", error);
    throw error;
  }
};
