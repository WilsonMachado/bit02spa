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
import { CartPage } from './components/Pages/CartPage';

function App() {

  //! States ///////
  
  const [cart, setCart] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // Aquí se alamacenará la sesión del usuario 
  const [numberOfItems, setNumberOfItems] = useState(0); // Aquí se alamacenará la cantidad de items en el carrito
  
  //! //////////////////////////////////////////////////////////////////////////////////

  //** Ciclo de vida */

  //? Montaje

  useEffect(() => {
    
    const userLogged = JSON.parse(localStorage.getItem('currentUser'));  //! Para obtener el usuario logueado
    
    if(userLogged !== null){
      setCurrentUser(userLogged);
    }

    const currentCart = JSON.parse(localStorage.getItem('cart'));         //! Para obtener los valores actuales del carrito
      
      if(currentCart !== null){     // Si existe el cart en el localstorage, se obtiene la cantidad de items   
                                    
          let suma = 0;
          for (let i = 0; i < currentCart.length; i++){
            suma += currentCart[i].quantity;
          }
          setNumberOfItems(suma);         
      }

  }, []) 

  //? Actualización  

  //? Desmontaje 

  //** //////////////////////////////////////////////////////////////////////////// */

  //** Handlers */   
 

  const getUsersFromLocalStorage = () => {
    console.table(JSON.parse(localStorage.getItem('registeredUsers')));
  };

  //** //////////////////////////////////////////////////////////////////////////// */

  return (<BrowserRouter> 
          
            <div className='container'>
              
              <Navegacion>
                { 
                  
                  (currentUser !== null) ?
                    <>
                      <div>
                        <Link to="/bit02spa/cart">{`Cart(${numberOfItems})`}</Link>
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
                  <Route path='/bit02spa/shop' element={<ShopPage cart={cart} setCart={setCart} numberOfItems={numberOfItems} setNumberOfItems={setNumberOfItems}/>} />
                  <Route path='/bit02spa/profile' element={
                    <RouteWatchdog currentUser={currentUser}>
                      <UserPage setNumberOfItems={setNumberOfItems} />
                    </RouteWatchdog>
                    }
                  />
                  <Route path='/bit02spa/register' element={<RegisterPage/>}/>
                  <Route path='/bit02spa/login' element={<LoginPage setCurrentUser={setCurrentUser}/>}/>
                  <Route path='/bit02spa/logout' element={<LogoutPage setCurrentUser={setCurrentUser}/>}/>
                  <Route path='/bit02spa/cart' element={<CartPage />}></Route>
                  <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </div>            
            
            <footer>Made with ❤️ by Dabliu</footer>         
            
          </BrowserRouter>);
           <div className='deploy-tools'>
           <button onClick={getUsersFromLocalStorage}>Imprimir usuarios</button>
         </div> 
          
}

export default App
