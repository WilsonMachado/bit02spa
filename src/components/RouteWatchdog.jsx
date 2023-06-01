import { Navigate } from "react-router"

export const RouteWatchdog = ({children, currentUser, redirectTo="/bit02spa"}) => {

    if(!currentUser){
        return <Navigate to={redirectTo} />;
    }else{
        return children;
    }

}
