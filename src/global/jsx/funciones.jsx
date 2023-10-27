export const api = "http://localhost:4000/api/";




export const consultaobtenerusuario = async (url, userId, token) => {
  const request = await fetch(api + url + userId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    }
  });

  return request;
}


export const consultaLogin = async (url, parametros) => {
  const request = await fetch(api + url, {
    method: "POST",
    body: JSON.stringify(parametros),
    headers: {
      "Content-Type": "application/json"
    }
  })

  return request;
}


export const obtenerTipoDocumento = async (url) => {
  const request = await fetch(api + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  return request
}

export const consultaGuardarUsuario = async (url,nuevoUsuario) => {
  const request = await fetch(api + url, {
    method: "POST",
    body: JSON.stringify(nuevoUsuario),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return request
}


export const consultaListarUruarios = async (url, token) => {
  const request = await fetch(api + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    }
  });

  return request;
}
