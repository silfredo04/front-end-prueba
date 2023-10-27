import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { Cargando } from '../../general/Cargando'



export const PrivateLayout = () => {

  const { session, cargando } = useAuth();


  if (cargando) {
    return(
      <Cargando/>
    )
  } else {
    return (
      <>
        {session == 'logeado' ?
          <>
            {/*LAYOUT*/}
            {/*Contenido Principal*/}
            <section>
              <Outlet />
            </section>
            {/*Pie de pagina*/}
          </>
          :
          <Navigate to="/" />
        }
      </>
    )
  }

}