import { Link } from "react-router-dom"

export const Navegacion = () => {
  return (
    
    <nav className="navegacion">
      <Link to='/bit02spa'>Inicio</Link>
      <Link to='/bit02spa/shop'>Tienda</Link>  
      <Link to='/bit02spa/profile'>Usuario</Link> 
    </nav>
  )
}
