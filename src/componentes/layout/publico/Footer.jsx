import React from 'react'

export const Footer = () => {
  const fecha = new Date();
  const añoActual = fecha.getFullYear();
  return (
    <>
    <footer className="footer">
        <div className='centrarFo'>
          <img alt="Licencia de Creative Commons" style={{ width: '100px' }} src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" />
        </div>
        &copy;<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank"></a><br />Este obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">licencia de Creative Commons Reconocimiento-NoComercial-SinObraDerivada 4.0 Internacional</a> - {añoActual}
    </footer>
      <a href="https://api.whatsapp.com/send?phone=+573014402213" className="btn-wsp" target="_blank"><i className="fa fa-whatsapp icono"></i></a>
    </>
  )
}