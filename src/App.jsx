import './App.css';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Navegacion} from './components/Navegacion';
import { RouteWatchdog } from './components/RouteWatchdog'; 

import { HomePage } from './components/Pages/HomePage';
import { ServicePage } from './components/Pages/ServicePage';  
import { ProductPage } from './components/Pages/ProductPage';
import { AboutPage } from './components/Pages/AboutPage';
import { ContactPage } from './components/Pages/ContactPage';
import { NotFoundPage } from './components/Pages/NotFoundPage';

function App() {

  const [user, setUser] = useState(null); // Aquí se alamacenará la sesión del usuario

  const login = (e) => {                   // Función para iniciar sesión
    // TODO: si hay datos de sesión en localstorage, usuario logueado.
    e.preventDefault();
    localStorage.setItem('registeredUsers', JSON.stringify( [1, 'Wilson', 'hola@hola.com', '1234'] ) );
    setUser( [1, 'Wilson', 'hola@hola.com', '1234'] );

  };

    // TODO: borrar la sesión del usuario en el localstorage, pero mantener usuarios registrados. En mi app, una cosa es estar logueado y otra es estar registrado
  const logout = (e) => { // Función para cerrar sesión
    e.preventDefault();
    setUser(null)
  }; 

  const addNewUser = () => {

    let currentUsers = JSON.parse(localStorage.getItem('registeredUsers')); // Obtener los usuarios actuales
    
    
    localStorage.setItem('registeredUsers', JSON.stringify
      ([currentUsers, [2, 'Daniel', 'chao@hola.com', '4321']] ));

    console.log(JSON.parse(localStorage.getItem('registeredUsers'))[0][1]);
    console.log(JSON.parse(localStorage.getItem('registeredUsers'))[1][1]);

  };
  
  const getUsersFromLocalStorage = () => {
    console.log(localStorage.getItem('registeredUsers'));
  };


  return (<BrowserRouter> 
          
            <Navegacion/>
        

            { // Este botón permite realizar el proceso de login o de logout
              // TODO: componente formulario que recibe datos de registro y almacena en localstorage
              user ? <a href='#' onClick={logout}>Logout</a>
              : <a href='#' onClick={login}>Login</a>
                    
            }

            <button onClick={getUsersFromLocalStorage}>Imprimir usuarios</button>
            <button onClick={addNewUser}>Registrar Nuevo usuario</button>

            <Routes>
              <Route path='/bit02spa' element={<HomePage/>} />
              <Route path='/bit02spa/servicios' element={<ServicePage/>} />
              <Route path='/bit02spa/productos' element={
                <RouteWatchdog user={user}>
                  <ProductPage/>
                </RouteWatchdog>
              } />              
              <Route path='/bit02spa/acerca-de' element={<AboutPage/>} />
              <Route path='/bit02spa/contacto' element={<ContactPage/>} />
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
            
          </BrowserRouter>);
}

export default App
