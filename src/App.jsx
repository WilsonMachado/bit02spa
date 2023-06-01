import './App.css';

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import {Navegacion} from './components/Navegacion';
import { RouteWatchdog } from './components/RouteWatchdog'; 

import { HomePage } from './components/Pages/HomePage';
import { ShopPage } from './components/Pages/ShopPage';  
import { UserPage } from './components/Pages/UserPage';
import { NotFoundPage } from './components/Pages/NotFoundPage';
import { RegisterPage } from './components/Pages/RegisterPage';
import { LoginPage } from './components/Pages/LoginPage';

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

  //** //////////////////////////////////////////////////////////////////////////// */

  return (<BrowserRouter> 
          
            <div className='container'>
              
              <Navegacion>
                { 
                  // TODO: componente formulario que recibe datos de registro y almacena en localstorage
                  (currentUser !== null) ?
                    <>
                      <div>
                        <Link to="/bit02spa/cart" onClick={cart}>Carrito</Link>
                        <Link to="#" onClick={logout}>Logout</Link>
                      </div>                      
                    </>
                  :
                    <>
                      <div>
                      <Link to="/bit02spa/login">Login</Link>
                      <Link to="/bit02spa/register">Register</Link>
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
                    }
                  />
                  <Route path='/bit02spa/register' element={<RegisterPage/>}/>
                  <Route path='/bit02spa/login' element={<LoginPage setCurrentUser={setCurrentUser}/>}/>
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
