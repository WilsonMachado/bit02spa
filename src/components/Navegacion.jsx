import { Link } from "react-router-dom"

export const Navegacion = () => {
  return (
    
    <nav className="navegacion">
      <Link to='/bit02spa'>Inicio</Link>
      <Link to='/bit02spa/servicios'>Servicios</Link>  
      <Link to='/bit02spa/productos'>Producto</Link>  
      <Link to='/bit02spa/acerca-de'>Acerca de</Link>  
      <Link to='/bit02spa/contacto'>Contacto</Link>  
    </nav>
  )
}
