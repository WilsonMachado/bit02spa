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

  //** Ciclo de vida */

  //? Montaje

  useEffect(() => {
    const userLogged = JSON.parse(localStorage.getItem('currentUser'));
    if(userLogged !== null){
      setCurrentUser(userLogged);
    }else{
      alert('Tenga en cuenta que debe registrarse si quiere acceder a todas la funcionalidades');
    }
  }, [])
  

  //? Actualización

  useEffect(() => {
    console.log("Se actualizó el usuario actual :p")
  }, [currentUser])

  

  //? Desmontaje 

  //** //////////////////////////////////////////////////////////////////////////// */

  //** Handlers */

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

    // TODO: borrar la sesión del usuario en el localstorage, pero mantener usuarios registrados. En mi app, una cosa es estar logueado y otra es estar registrado
  const logout = (e) => { // Función para cerrar sesión
    e.preventDefault();
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  }; 

  const addNewUser = (name, password) => {

    let currentUsers = JSON.parse(localStorage.getItem('registeredUsers')); // Obtener los usuarios actuales
    
    if (currentUsers !== null){                                             // Si hay usuario, agrega el que se registra
      
      currentUsers.push({
        username: name,
        password: password
      });    
      
      localStorage.setItem('registeredUsers', JSON.stringify( currentUsers ));
      console.log('Usuario agregado');
    
    }else{                                                                  // De lo contrario, advierte de que no hay usuarios
      alert('En la juega que no hay usuarios registrados'); 
    } 

  };  
  
  const cart = (e) =>{
    e.preventDefault();
    console.log("Vamos pal carrito")
  }
  
  const signUp = (e) =>{
    e.preventDefault();
    console.log("Vamos pal registro")
  }
  

  const getUsersFromLocalStorage = () => {
    console.table(JSON.parse(localStorage.getItem('registeredUsers')));
  };

  return (<BrowserRouter> 
          
            <div className='container'>
              
              <Navegacion>
                { 
                  // TODO: componente formulario que recibe datos de registro y almacena en localstorage
                  (currentUser !== null) ?
                    <>
                      <div>
                        <a href='#' onClick={cart}>Carrito</a>
                        <a href='#' onClick={logout}>Logout</a>
                      </div>                      
                    </>
                  :
                    <>
                      <div>
                        <a href='#' onClick={login}>Login</a>
                        <a href='#' onClick={signUp}>Registro</a>
                      </div>                      
                    </>
                                          
                }
              </Navegacion>

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
        

              
                
              

              
            </div>            

            <div>
              <button onClick={getUsersFromLocalStorage}>Imprimir usuarios</button>
              <button onClick={() => addNewUser('Sí', 'Funciona')}>Registrar Nuevo usuario</button>
            </div>
            
          </BrowserRouter>);

          
}

export default App
