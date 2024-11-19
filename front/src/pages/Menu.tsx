import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Button from '@mui/material/Button';



function Menu() {
  const [isLogin, setIsLogin] = useState(true);
  

  return (
    <>
      <div  className="flex justify-center items-center"> 
        <Button
          type="button"
          variant="contained"
          className="text-blue-500 hover:text-blue-400"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          Ir a  {isLogin ? "Crear usuario" : "Iniciar sesión"}
        </Button>
      </div>

      
      {isLogin ? <Login /> : <Signup />}
    </>
  );
}

export default Menu;
