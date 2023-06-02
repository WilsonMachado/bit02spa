import { useEffect } from 'react';
import { ShoppingCartTable } from '../ShoppingCartTable'

export const CartPage = ({cart, setCart}) => {

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
        <ShoppingCartTable cartItems={cart}>
            <button>Clear cart</button>
            <button>Checkout</button>
        </ShoppingCartTable>
    </div>
  )
}
