import { Link } from "react-router-dom";
import { Modal } from "./Modal";
export const RouteWatchdog = ({children, currentUser, redirectTo="/bit02spa"}) => {

    /*< <Navigate to={redirectTo} /> */  

    if(!currentUser){   
        return <>
            <Modal title={"Error"} text={"Antes de visitar su perfil, debe registarse o iniciar sesión."}>
                <Link to={"/bit02spa/register"}>Register</Link>
                <Link to={"/bit02spa/login"}>Login</Link>
            </Modal>                      
        </>;
    }else{
        return children;
    }

}
