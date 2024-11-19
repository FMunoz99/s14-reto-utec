import { useNavigate } from 'react-router-dom'; // Asegúrate de importar useNavigate
import { FaExclamationTriangle } from 'react-icons/fa'; // Asegúrate de importar el ícono
import React from 'react';
import Cart from '../components/Cart';
const CarritoPage:React.FC = () => {
    return (
        <div>
            <h1>Carrito de compras</h1>
            <Cart /> {/* Componente de carrito que contiene la lógica del carrito */}
        </div>
    );
};

export default CarritoPage; // Asegúrate de exportar el componente al final
