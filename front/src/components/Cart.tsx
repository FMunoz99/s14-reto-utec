import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../services/carrito/getCarrito';
import { updateCartItem } from '../services/carrito/updateCarrito';
import { removeCartItem } from '../services/carrito/deleteCarrito';
import { carritoResponse } from '@interfaces/carrito/carritoResponse';
import { getUsernameBasedOnToken } from "d:/24-2/DBP/hackaton3/FRONT-HACKATON3/src/utils/getUsernameBaseOnToken";

const Cart: React.FC = () => {
  const { session } = useAuthContext();
  const [cart, setCart] = useState<carritoResponse['products']>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const user: string = getUsernameBasedOnToken().toString();;
        const response = await getCart(user); // Reemplaza 'userId' con el ID real
        setCart(response.products);
      } catch (error) {
        console.error("Error al cargar el carrito:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const handleUpdateQuantity = async (itemId: string, newQty: number) => {
    await updateCartItem('userId', itemId, newQty);
    const updatedCart = cart.map(item =>
      item.itemId === itemId ? { ...item, qty: newQty } : item
    );
    setCart(updatedCart);
  };

  const handleRemoveItem = async (itemId: string) => {
    await removeCartItem('userId', itemId);
    setCart(cart.filter(item => item.itemId !== itemId));
  };

  const redirectToProductList = () => navigate('/productos');

  if (loading) return <div className="text-center py-6">Cargando...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">El carrito está vacío.</p>
      ) : (
        cart.map(item => (
          <div
            key={item.itemId}
            className="flex justify-between items-center border-b py-4"
          >
            <div>
              <h3 className="text-lg font-semibold">{item.itemId}</h3>
              <p className="text-sm text-gray-600">ID de producto: {item.itemId}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleUpdateQuantity(item.itemId, item.qty - 1)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="mx-2">{item.qty}</span>
              <button
                onClick={() => handleUpdateQuantity(item.itemId, item.qty + 1)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleRemoveItem(item.itemId)}
              className="text-red-500 hover:text-red-700"
            >
              Eliminar
            </button>
          </div>
        ))
      )}
      <div className="flex justify-between mt-6">
        <button
          onClick={redirectToProductList}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Agregar más productos
        </button>
        <button
          onClick={() => console.log("Inicia proceso de compra")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Cart;
