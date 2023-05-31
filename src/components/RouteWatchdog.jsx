import { Navigate } from "react-router"

export const RouteWatchdog = ({children, user, redirectTo="/bit02spa"}) => {

    if(!user){
        return <Navigate to={redirectTo} />;
    }else{
        return children;
    }

}
