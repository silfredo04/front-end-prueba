import React from 'react';
import { Routes, Route, BrowserRouter, Navigate, Link } from 'react-router-dom';
import { PublicLayout } from '../componentes/layout/publico/PublicLayout';
import { PrivateLayout } from '../componentes/layout/privado/PrivateLayout';
import {Login} from '../componentes/inicio/Login';
import {Registro} from '../componentes/inicio/Registro';
import {Logaut} from '../componentes/inicio/Logaut';
import {ListarUsuario} from '../componentes/layout/privado/administrador/ListarUsuario';
import { Panel } from '../componentes/layout/privado/administrador/Panel';
import { AuthProvider } from '../context/AuthProvider';
import { CrearUsuario } from '../componentes/layout/privado/administrador/CrearUsuario';



export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/*Rutas Publicas*/}
          <Route path='/' element={<PublicLayout />}>
            <Route index element={<Login/>} />
            <Route path='inicio' element={<Login/>} />
            <Route path='registro' element={<Registro />} />
          </Route>

          {/*Rutas privadas*/}
          <Route path='/panel' element={<PrivateLayout />}>
            <Route index element={<Panel />} />
            <Route path='logaut' element={<Logaut/>} />
            <Route path='listar' element={<ListarUsuario/>} />
            <Route path='Crear' element={<CrearUsuario/>} />
          </Route>

          {/*Rutas Error*/}
          <Route path='*' element={
                        <>
                            <p>
                                <h1>ERROR 404</h1>
                                <Link to="/">Volver al Inicio</Link>
                            </p>

                        </>
                    } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
