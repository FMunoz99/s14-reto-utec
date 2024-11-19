import Api from '../api';
import { carritoResponse } from '@interfaces/carrito/carritoResponse';

const api = await Api.getInstance();

export const getCart = async (userId: string): Promise<carritoResponse> => {
  try {
    const response = await api.get<void, carritoResponse>({
      url: `/cart/${userId}`
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener el carrito:", error);
    throw error;
  }
};
