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
import { LogoutPage } from './components/Pages/LogoutPage';

function App() {

  const [currentUser, setCurrentUser] = useState(null); // Aquí se alamacenará la sesión del usuario 

  //** Ciclo de vida */

  //? Montaje

  useEffect(() => {
    const userLogged = JSON.parse(localStorage.getItem('currentUser'));
    if(userLogged !== null){
      setCurrentUser(userLogged);
    }
  }, []) 

  //? Actualización  

  //? Desmontaje 

  //** //////////////////////////////////////////////////////////////////////////// */

  //** Handlers */   
 
  
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
                        <Link to="/bit02spa/cart" onClick={cart}>Cart</Link>
                        <Link to="/bit02spa/logout">Logout</Link>
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
                  <Route path='/bit02spa/logout' element={<LogoutPage setCurrentUser={setCurrentUser}/>}/>
                  <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </div>            
            
            <div className='deploy-tools'>
              <button onClick={getUsersFromLocalStorage}>Imprimir usuarios</button>
            </div>
            
          </BrowserRouter>);

          
}

export default App
