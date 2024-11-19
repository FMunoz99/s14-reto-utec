import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Menu from "./pages/Menu";
import MenuPrincipal from "./pages/MenuPrincipal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/menu" element={<MenuPrincipal />} />
      </Routes>
    </Router>
  );
}

export default App;
