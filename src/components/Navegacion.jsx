import { Link } from "react-router-dom";

export const Navegacion = ({children}) => {
  return (
    
    <nav className="navegacion">
      <Link to='/bit02spa'>Home</Link>
      <Link to='/bit02spa/shop'>Store</Link>  
      <Link to='/bit02spa/profile'>Profile</Link>
      <div>
        {children}
      </div>
    </nav>
  )
}
