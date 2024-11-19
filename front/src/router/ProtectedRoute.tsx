import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext"; // Asegúrate de que la ruta sea correcta

interface ProtectedRouteProps {
    element: JSX.Element;
}

export function ProtectedRoute({ element }: ProtectedRouteProps) {
    const { session, isLoading } = useAuthContext(); // Desestructuramos directamente

    if (isLoading) return <div>Loading...</div>; // Mostrar un loading mientras se verifica la sesión

    // Si no hay sesión, redirige al login
    if (!session) {
        return <Navigate to={`/auth/login?from=${location.pathname}`} replace />;
    }

    return element; // Si hay sesión, renderiza el componente hijo (element)
}
