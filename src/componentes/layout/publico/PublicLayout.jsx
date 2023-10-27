import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import useAuth from '../../../hooks/useAuth';
import { Cargando } from '../../general/Cargando';
import { Header } from '../publico/Header'


export const PublicLayout = () => {

    const { cargando,session } = useAuth();

    console.log(session)
    
    if (cargando) {
        return (
            <Cargando />
        )
    } else {
        return (
            <>
                {session == 'deslogeado' ?
                    <>
                        {/*LAYOUT*/}
                        <Header/>
                        {/*Contenido Principal*/}
                        <section>
                            <Outlet />
                        </section>
                        {/*Pie de pagina*/}
                        <Footer />
                    </>
                    :
                    <Navigate to="/panel" />
                }
            </>
        )
    }
}
