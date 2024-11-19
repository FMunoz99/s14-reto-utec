import './styles/App.css';
import { 
	BrowserRouter as Router, 
	Routes, 
	Route,
	Navigate 
} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import CarritoPage from './pages/CarritoPage';
import DetalleProductoPage from './pages/DetalleProductoPage';
import ProductosPage from './pages/ProductosPage';
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from './router/ProtectedRoute';
function App() {
	return (
		<AuthProvider> {/* Envuelve las rutas en AuthProvider */}
			<Router>
				<Routes>
					{/* Ruta por defecto redirige a login si no está autenticado */}
					<Route path="/" element={<Navigate to="/auth/login" />} />

					{/* Rutas públicas */}
					<Route path="/auth/login" element={<LoginPage />} />
					<Route path="/auth/register" element={<RegisterPage />} />

					{/* Rutas protegidas (requieren autenticación) */}
					<Route path="/carrito" element={<ProtectedRoute element={<CarritoPage />} />} />
					<Route path="/productos" element={<ProtectedRoute element={<ProductosPage />} />} />
					<Route path="/detalleProducto/:id" element={<ProtectedRoute element={<DetalleProductoPage />} />} />

					{/* Ruta comodín para manejar errores 404 */}
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;