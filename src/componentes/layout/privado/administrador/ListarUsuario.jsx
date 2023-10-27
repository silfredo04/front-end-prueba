import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'
import { consultaListarUruarios, api } from '../../../../global/jsx/funciones';

export const ListarUsuario = () => {
    const [usuario, setUsuario] = React.useState([]);

    const listarUsuario = async () => {

        // sacar datos del usuario identificado del localstorage

        const token = localStorage.getItem("token");
        // conectar con el back
        const respuesta = await consultaListarUruarios('usuario/listarusuarios/', token);
        const data = await respuesta.json();

        if (data.status == "success") {
            setUsuario(data.respuesta);
        }
    }

    React.useEffect(() => {
        listarUsuario();
    }, [])
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {usuario.map(usu => (
                <>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Foto" src={api +'usuario/obtenerimagenavatar/'+ usu.image} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={usu.nick}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {usu.correo}
                                    </Typography>
                                    {"  " + usu.telefono}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </>
            ))}
        </List>
    );
}
