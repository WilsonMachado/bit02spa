import { useState } from 'react';
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { Modal } from '../Modal';

export const LogoutPage = ({cart, setCurrentUser}) => {

    //! States ///////

        const [logout, setLogout] = useState(false);

    //! //////////////////////////////////////////////////////////////////////////////////

    //** Handlers */

        const handlerLogout = (e) => { // Función para cerrar sesión
            e.preventDefault();
            
            
            console.table(cart); //TODO: Esto es para verificar, se debe eliminar también

            //* La idea de esta lógica es que se almacene el actual carrito en el respectivo lugar de cada usuario registrado. Así, hacer persistente su carrito

            

            

            localStorage.removeItem('currentUser');
            //TODO: Una vez terminado, se espera que aquí se borre el item de carrito después de hacer logout
            setCurrentUser(null);
            setLogout(true);
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
