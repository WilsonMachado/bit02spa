import { Link } from "react-router-dom";
import { Modal } from "./Modal";
export const RouteWatchdog = ({children, currentUser, redirectTo="/bit02spa"}) => {    

    if(!currentUser){   
        return (
            <Modal title={"Error"} text={"Before visiting your profile, you must register or log in."}>
                <Link to={"/bit02spa/register"}>Register</Link>
                <Link to={"/bit02spa/login"}>Login</Link>
            </Modal>)                      
        
    }else{
        return children;
    }

}
