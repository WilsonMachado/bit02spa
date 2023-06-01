import { Navigate } from "react-router"
import { Modal } from "./Modal";
export const RouteWatchdog = ({children, currentUser, redirectTo="/bit02spa"}) => {

    /*< <Navigate to={redirectTo} /> */  

    if(!currentUser){
        return <>
            <Modal />                      
        </>;
    }else{
        return children;
    }

}
