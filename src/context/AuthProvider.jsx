import React, { createContext, useEffect, useState } from 'react'
import { api } from '../global/jsx/funciones';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true);
    const [session, setSession] = useState('deslogeado');
    

    useEffect(() => {
        authUser();
    }, []);

    const authUser = async () => {
        // sacar datos del usuario identificado del localstorage

        const token = localStorage.getItem("token");
        const usuario = localStorage.getItem("usuario");

        // Comprobar si tengo el token y el user 
        if (!token || !usuario) {
            setCargando(false);
            return false;
        }

        // Transformar los datos a un objeto de javascript
        const userObj = JSON.parse(usuario);
        const userId = userObj.id;

        // Peticion ajax al bakend que compruebe el token y que me devuelva 
        // todos los datos del usuario 

        const request = await fetch(api+ "usuario/obtenerusuario/" + userId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });

        const data = await request.json();
        console.log(data.usuario);
        // Setear el estado de auth
        setAuth(data.usuario);
        // cargando
        setCargando(false);
        setSession('logeado')
        

    }

  return (
    <AuthContext.Provider
        value={{
            auth,
            setAuth,
            cargando,
            setCargando,
            session,
            setSession
        }}
    >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;