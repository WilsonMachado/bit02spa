import './App.css';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Navegacion} from './components/Navegacion';
import { RouteWatchdog } from './components/RouteWatchdog'; 

import { HomePage } from './components/Pages/HomePage';
import { ShopPage } from './components/Pages/ShopPage';  
import { UserPage } from './components/Pages/UserPage';
import { NotFoundPage } from './components/Pages/NotFoundPage';

function App() {

  const [user, setUser] = useState(null); // Aquí se alamacenará la sesión del usuario

  const login = (e) => {                   // Función para iniciar sesión
    
    // TODO: si hay datos de sesión en localstorage, usuario logueado.
    e.preventDefault();
    localStorage.setItem('registeredUsers', JSON.stringify( [['Wilson', '1234']] ) );
    setUser([['Wilson', '1234']]);

  };

    // TODO: borrar la sesión del usuario en el localstorage, pero mantener usuarios registrados. En mi app, una cosa es estar logueado y otra es estar registrado
  const logout = (e) => { // Función para cerrar sesión
    e.preventDefault();
    setUser(null)
  }; 

  const addNewUser = () => {

    let currentUsers = JSON.parse(localStorage.getItem('registeredUsers')); // Obtener los usuarios actuales
    currentUsers.push(['Daniel', '4321']);
    
    localStorage.setItem('registeredUsers', JSON.stringify( currentUsers  ));

      console.log('Usuario agregado');

  };

  
  
  const getUsersFromLocalStorage = () => {
    console.table(JSON.parse(localStorage.getItem('registeredUsers')));
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
              <Route path='/bit02spa/shop' element={<ShopPage/>} />
              <Route path='/bit02spa/profile' element={
                <RouteWatchdog user={user}>
                  <UserPage/>
                </RouteWatchdog>
              } />
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
            
          </BrowserRouter>);
}

export default App
