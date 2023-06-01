import { useState } from 'react';
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { Modal } from '../Modal';

export const LogoutPage = ({setCurrentUser}) => {

    //! States ///////

        const [logout, setLogout] = useState(false);

    //! //////////////////////////////////////////////////////////////////////////////////

    //** Handlers */

        const handlerLogout = (e) => { // Función para cerrar sesión
            e.preventDefault();
            localStorage.removeItem('currentUser');
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
