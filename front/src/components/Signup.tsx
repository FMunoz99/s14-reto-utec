import axios from "axios";
import image from "../img/cat-menu.jfif";

import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
}));

interface  User  {
  email: string;
  password: string;
  
};

function Signup() {
  document.title = 'register';

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    
    const userDTO: User = {
      email: (formData.get("email") as string),
      password: (formData.get("password") as string)
      
    };
    
    console.log(userDTO);
    try{
    console.log(userDTO);
      const res = await axios.post("http://3.90.3.179:8000/api/auth/register", userDTO);
      console.log("usuario creado exitosamente", res.data);
    }catch(error){
      console.log("error en inicio sesion",error)
    }
    

  }

  return (
    <>
      <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"
    }} className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="p-3 text-red-50 selection:text-red-50 font-semibold text-6xl"> signup</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 flex flex-col mx-auto"
        >
          
          <input
            className="outline rounded p-1"
            type="email"
            placeholder="email"
            name="email"
          />
          <input
            className="outline rounded p-1"
            type="password"
            placeholder="password"
            name="password"
          />

          <ColorButton
            className="rounded bg-blue-400 hover:bg-blue-300 p-1"
            type="submit"
            variant="contained"
          >
            Registrar Nuevo Usuario
          </ColorButton>
        </form>
      </div>
    </>
  );
}

export default Signup;
