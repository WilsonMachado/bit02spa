import { useState, useEffect } from 'react';
import { ShoppingCartTable } from '../ShoppingCartTable';
import { Link } from 'react-router-dom';
import { Modal } from '../Modal';

export const CartPage = ({cart, setCart, numberOfItems, setNumberOfItems}) => {

    //! States ///////
    
    const [checkout, setCheckout] = useState(false);
    
    //! //////////////////////////////////////////////////////////////////////////////////

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

    //** Handlers */   

    const handlerRemoveAllCartItems = () => {
      setCart([]);
      setNumberOfItems(0);
      localStorage.setItem('cart', JSON.stringify([]));
    }

    const handlerCheckOut = () => {

      handlerRemoveAllCartItems();
      setCheckout(true);

    }

    //** //////////////////////////////////////////////////////////////////////////// */

    const name = "Jhon Die";

    if(checkout){

      return (<Modal title={`Thanks for your order, ${name}`} text={"We have received your order! We are processing it and will contact you soon with the details. You can continue to enjoy our store."}>
                <Link to={"/bit02spa"}>Okay!</Link>
              </Modal>);
  
    }else if(numberOfItems == 0){

    return (<Modal title={`Ups!`} text={"It looks like your cart is empty. We invite you to go to our store and choose something to your liking ;)"}>
              <Link to={"/bit02spa/shop"}>Go to Store</Link>
            </Modal>);

  } else{
    return (
      <div className="cart-container">
          <h2>Bill</h2>
          <ShoppingCartTable cart={cart} setCart={setCart} setNumberOfItems={setNumberOfItems}>
              <Link onClick={handlerRemoveAllCartItems}>Clear cart</Link>
              <Link onClick={handlerCheckOut}>Checkout!</Link>
          </ShoppingCartTable>
      </div>
    )
  }
}
