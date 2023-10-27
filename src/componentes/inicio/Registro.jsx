import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useForms } from '../../hooks/useForms'
import { obtenerTipoDocumento,consultaGuardarUsuario } from '../../global/jsx/funciones';
import toast, { Toaster } from 'react-hot-toast';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import americana from '../../../src/global/imagenes/escudo.png';

export const Registro = ({nombre = ''}) => {
    const { form, cambiado } = useForms();
    const [tipoDoc, setTipoDoc] = useState([]);
    const formRef = useRef(null); // Referencia al formulario
    let titulo = 'Registro';
    if(nombre != ''){
        titulo = nombre
    }
    

    const tenerDocumento = async () => {
        const res = await obtenerTipoDocumento('tipo_documento/listar');
        const data = await res.json();
        if (data.status == "success" && data.respuesta) {
            setTipoDoc(data.respuesta);
        }
    }



    const guardarUsuario = async (e) => {
        // Prevenir actualizacion de pantalla
        e.preventDefault()

        // Recoger datos del formulario
        let nuevoUsuario = form;

        // Guardar Usuarios en el backend
        const res = await consultaGuardarUsuario("usuario/registro",nuevoUsuario)

        const data = await res.json();

        if (data.status == "success") {
            toast.success(data.message)
            // Resetear el formulario
            formRef.current.reset();
            nuevoUsuario = ''
        } else {
            toast.error(data.message)
        }

    }

    useEffect(() => {
        tenerDocumento();
    }, []);

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
                            <div className="heading">{titulo}</div>
                            <form ref={formRef} className="form" onSubmit={guardarUsuario}>
                                <input required="" className="input" type="text" name="numero_documento" id="numero_documento" placeholder="Numero de Documento" onChange={cambiado} />
                                <input required="" className="input" type="text" name='nombre' id='nombre' placeholder="Nombre" onChange={cambiado} />
                                <input required="" className="input" type="text" name='apellido' id='apellido' placeholder="Apellido" onChange={cambiado} />
                                <input required="" className="input" type="text" name='nick' id='nick' placeholder="Nick" onChange={cambiado} />
                                <input required="" className="input" type="text" name='telefono' id='telefono' placeholder="telefono" onChange={cambiado} />
                                <input required="" className="input" type="email" name="correo" id="correo" placeholder="E-mail" onChange={cambiado} />
                                {
                                    tipoDoc.map(tipo => (
                                        <select className="input" name='tipo_documento' onChange={cambiado} key={tipo.id}>
                                            <option selected>Tipo de documento</option>
                                            <option value={tipo.id}>{tipo.nombre_documento}</option>
                                        </select>
                                    ))
                                }
                                <input required="" className="input" type="password" name="password" id="password" placeholder="Password" onChange={cambiado} />
                                <input required="" className="input" type="password" name="confirmar" id="confirmar" placeholder="Confirm password" onChange={cambiado} />
                                {titulo === 'Registro' && <span className="forgot-password"><NavLink to="/inicio">Iniciar sesión</NavLink></span>}
                                {titulo === 'Registro' ? <input className="login-button" type="submit" value="Registrate" />:<input className="login-button" type="submit" value="Guardar" />}
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