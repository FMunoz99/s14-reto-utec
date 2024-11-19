import { createBrowserRouter } from "react-router-dom";
import App from "src/App";
import { ProtectedRoute } from "./ProtectedRoute";  // Asegúrate de tener este componente importado
import LoginPage from "src/pages/LoginPage";
import RegisterPage from "src/pages/RegisterPage";
import CarritoPage from "src/pages/CarritoPage";
import ProductosPage from "src/pages/ProductosPage";
import DetalleProductoPage from "src/pages/DetalleProductoPage";
import ErrorPage from "src/pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // Rutas públicas
            {
                path: "auth",
                children: [
                    { path: "login", element: <LoginPage /> },
                    { path: "register", element: <RegisterPage /> },
                ],
            },
            // Rutas protegidas (solo accesibles si el usuario está autenticado)
            {
                path: "/carrito",
                element: <ProtectedRoute element={<CarritoPage />} />,
            },
            {
                path: "/productos",
                element: <ProtectedRoute element={<ProductosPage />} />,
            },
            {
                path: "/detalleProducto/:id",
                element: <ProtectedRoute element={<DetalleProductoPage />} />,
            },
            // Ruta comodín (Error 404)
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
]);
