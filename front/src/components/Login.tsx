import axios from "axios";
import useToken from "../hooks/useToken";
import { useNavigate } from "react-router-dom";
import image from "../img/cat-menu.jfif";

import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

type LoginDto = {
  email: string;
  password: string;
};

// const BootstrapButton = styled(Button)({
//   boxShadow: 'none',
//   textTransform: 'none',
//   fontSize: 16,
//   padding: '6px 12px',
//   border: '1px solid',
//   lineHeight: 1.5,
//   backgroundColor: '#0063cc',
//   borderColor: '#0063cc',
//   fontFamily: [
//     '-apple-system',
//     'BlinkMacSystemFont',
//     '"Segoe UI"',
//     'Roboto',
//     '"Helvetica Neue"',
//     'Arial',
//     'sans-serif',
//     '"Apple Color Emoji"',
//     '"Segoe UI Emoji"',
//     '"Segoe UI Symbol"',
//   ].join(','),
//   '&:hover': {
//     backgroundColor: '#0069d9',
//     borderColor: '#0062cc',
//     boxShadow: 'none',
//   },
//   '&:active': {
//     boxShadow: 'none',
//     backgroundColor: '#0062cc',
//     borderColor: '#005cbf',
//   },
//   '&:focus': {
//     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//   },
// });

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
}));


function Login() {
  const { setToken } = useToken();
  const navigate = useNavigate();
  
  document.title = 'login';



  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = (formData.get("email") as string) || "";
    const password = (formData.get("password") as string) || "";

    const loginDto: LoginDto = {
      email,
      password,
    };
    try{
      console.log(loginDto);
      const res = await axios.post("http://3.90.3.179:8000/api/auth/login", loginDto);
      console.log("login hecho con exito",res.data);
      const { token } = res.data;
      setToken(token);
      navigate("/menu");
    }catch(error){
      console.log("no se puede el login",error)
    }
    

    
  }

  return (
    <>
    
      <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"
    }} className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="p-3 text-red-50 selection:text-red-50 font-semibold text-6xl"> Login </h1>
      
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
            className="rounded bg-red-400 hover:bg-blue-300 p-1"
            type="submit"
            variant="contained"
          >
            Iniciar sesión
          </ColorButton >
        </form>
      </div>
    </>
  );
}

export default Login;





