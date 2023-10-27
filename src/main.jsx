import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/global/css/index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Login } from './componentes/inicio/Login';
import { Routing } from './routers/Routing';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>,
)
