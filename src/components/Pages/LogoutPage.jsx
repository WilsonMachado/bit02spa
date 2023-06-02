import { useState, useEffect } from 'react';
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { Modal } from '../Modal';

export const LogoutPage = ({cart, setCart, setCurrentUser, setNumberOfItems}) => {

    //! States ///////

        const [logout, setLogout] = useState(false);

    //! //////////////////////////////////////////////////////////////////////////////////

    //? Montaje

  useEffect(() => {
    
    const userLogged = JSON.parse(localStorage.getItem('currentUser'));  //! Para obtener el usuario logueado
    
    if(userLogged !== null){
      setCurrentUser(userLogged);
    }

    const currentCart = JSON.parse(localStorage.getItem('cart'));         //! Para obtener los valores actuales del carrito
      
      if(currentCart !== null){     // Si existe el cart en el localstorage, se obtiene la cantidad de items   
          setCart(currentCart);                          
          let suma = 0;
          for (let i = 0; i < currentCart.length; i++){
            suma += currentCart[i].quantity;
          }
          setNumberOfItems(suma);         
      }

  }, []) 

    //** Handlers */

        const handlerLogout = (e) => { // Función para cerrar sesión
            e.preventDefault();

            //* La idea de esta lógica es que se almacene el actual carrito en el respectivo lugar de cada usuario registrado. Así, hacer persistente su carrito

            let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')); // Obtener todos los usuarios actuales
            const userLoggingOutId = JSON.parse(localStorage.getItem('currentUser'))[0].id;
            
            let userLoggingOut = registeredUsers.find((user) => user.id === userLoggingOutId);

            userLoggingOut.cart = cart; 

            console.table(userLoggingOut.cart);
            
            localStorage.setItem('registeredUsers', JSON.stringify( registeredUsers ) );
            console.log(JSON.parse(localStorage.getItem('registeredUsers')))

            /*

            localStorage.removeItem('currentUser');
            //TODO: Una vez terminado, se espera que aquí se borre el item de carrito después de hacer logout
            setCurrentUser(null);
            setLogout(true); */
        };
    
    //** //////////////////////////////////////////////////////////////////////////// */
 
    if(logout){

        return <Navigate to='/bit02spa'/>;

    }else{
        return (
            <Modal title={"Waring!"} text={"You will be logged out. Are you sure you wish to continue?"}>
                <Link to={"/bit02spa/profile"}>Nou!</Link>
                <Link to={"/bit02spa"} onClick={handlerLogout} >Yep!</Link>
            </Modal>);
    
    }
}
