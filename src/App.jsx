import './App.css';

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Navegacion} from './components/Navegacion';
import { RouteWatchdog } from './components/RouteWatchdog'; 

import { HomePage } from './components/Pages/HomePage';
import { ShopPage } from './components/Pages/ShopPage';  
import { UserPage } from './components/Pages/UserPage';
import { NotFoundPage } from './components/Pages/NotFoundPage';

function App() {

  const [currentUser, setCurrentUser] = useState(null); // Aquí se alamacenará la sesión del usuario

  const login = (e) => {                   // Función para iniciar sesión
    
    // TODO: si hay datos de sesión en localstorage, usuario logueado.
    e.preventDefault();

    const credenciales = {
      username: 'Wilson',
      password: '1234'
    };
    
    localStorage.setItem('registeredUsers', JSON.stringify( [credenciales] ) );
    
    localStorage.setItem('currentUser',     JSON.stringify( credenciales ) );
    
    setCurrentUser(credenciales);   

  };

  //** Ciclo de vida */

  //? Montaje
  
  

  //? Actualización

  

  //? Desmontaje

 

  //** //////////////////////////////////////////////////////////////////////////// */

  //** Handlers */

    // TODO: borrar la sesión del usuario en el localstorage, pero mantener usuarios registrados. En mi app, una cosa es estar logueado y otra es estar registrado
  const logout = (e) => { // Función para cerrar sesión
    e.preventDefault();
    setUser(null)
  }; 

  const addNewUser = (name, password) => {

    let currentUsers = JSON.parse(localStorage.getItem('registeredUsers')); // Obtener los usuarios actuales
    
    if (currentUsers !== null){
      
      currentUsers.push({
        username: name,
        password: password
      });    
      
      localStorage.setItem('registeredUsers', JSON.stringify( currentUsers ));
      console.log('Usuario agregado');
    
    }else{
      alert('En la juega que no hay usuarios registrados');
    } 

  };  
  
  const getUsersFromLocalStorage = () => {
    console.table(JSON.parse(localStorage.getItem('registeredUsers')));
  };

  return (<BrowserRouter> 
          
            <Navegacion/>
        

            { // Este botón permite realizar el proceso de login o de logout
              // TODO: componente formulario que recibe datos de registro y almacena en localstorage
              currentUser ? <a href='#' onClick={logout}>Logout</a>
              : <a href='#' onClick={login}>Login</a>
                    
            }

            <button onClick={getUsersFromLocalStorage}>Imprimir usuarios</button>
            <button onClick={() => addNewUser('Sí', 'Funciona')}>Registrar Nuevo usuario</button>

            <Routes>
              <Route path='/bit02spa' element={<HomePage/>} />
              <Route path='/bit02spa/shop' element={<ShopPage/>} />
              <Route path='/bit02spa/profile' element={
                <RouteWatchdog currentUser={currentUser}>
                  <UserPage currentUser={currentUser}/>
                </RouteWatchdog>
              } />
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
            
          </BrowserRouter>);
}

export default App
