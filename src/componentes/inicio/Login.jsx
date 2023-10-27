import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import americana from '../../../src/global/imagenes/escudo.png';
import { NavLink } from 'react-router-dom'
import { useForms } from '../../hooks/useForms'
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { consultaLogin } from '../../global/jsx/funciones';


export const Login = () => {
  const { form, cambiado } = useForms();
  const { setAuth } = useAuth();

  const login = async (e) => {
    // Prevenir actualizacion de pantalla
    e.preventDefault()
    // recoger parametro del formulario 
    let parametros = form
    // conectar con el back
    const respuesta = await consultaLogin('usuario/login',parametros);

    const data = await respuesta.json();
    
    if (data.status == "success") {
      // Persistir los datos en el navegador 
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));
      // setear datos en el auth
      setAuth(data.usuario)
      // mensaje
      toast.success(data.message)
      // Redireccion 
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.success(data.message)
    }

  }

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <div className="container">
              <div className="heading">Login</div>
              <form className="form" onSubmit={login}>
                <input required="" className="input" type="email" name="correo" id="correo" placeholder="E-mail" onChange={cambiado} />
                <input required="" className="input" type="password" name="password" id="password" placeholder="Password" onChange={cambiado} />
                <span className="forgot-password"><NavLink to="/registro">Registrate</NavLink></span>
                <input className="login-button" type="submit" value="Sign In" />
              </form>
            </div>
          </Grid>
          <Grid item xs={6}>
            <img src={americana} className="rounded-3" alt="escudo" />
          </Grid>
        </Grid>
      </Box>
    </>

  );
};
