import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import { Cargando } from '../general/Cargando';

export const Logaut = () => {
    const {setAuth,setSession} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Vaciar el localstorage
        localStorage.clear();
        //Setear estados globales a vacio 
        setAuth({});
        setSession('deslogeado');
        // Navigate (redireccion) al login
        navigate("/inicio");
        console.log('dentro')
    });
    return (
        <>
            <h1>Cerrando sesion ...............</h1>
            <Cargando/>
        </>
    )
}