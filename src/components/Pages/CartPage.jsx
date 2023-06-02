import { useEffect } from 'react';
import { ShoppingCartTable } from '../ShoppingCartTable';
import { Link } from 'react-router-dom';

export const CartPage = ({cart, setCart, setNumberOfItems}) => {

    //** Ciclo de vida */

    //? Montaje

    useEffect(() => {
        const currentCart = JSON.parse(localStorage.getItem('cart'));
        if(currentCart !== null){
          setCart(currentCart);
        }
      }, [])  
  
      //? Actualización 
  
      //? Desmontaje 


  return (
    <div className="cart-container">
        <h2>Bill</h2>
        <ShoppingCartTable cart={cart} setCart={setCart} setNumberOfItems={setNumberOfItems}>
            <Link onClick={() => console.log('Limpiando carrito')}>Clear cart</Link>
            <Link onClick={() => console.log('Vamos al pago')}>Checkout!</Link>
        </ShoppingCartTable>
    </div>
  )
}
