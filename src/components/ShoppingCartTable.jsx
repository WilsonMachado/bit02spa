import { useState, useEffect } from 'react';

export const ShoppingCartTable = ({ cart, setCart, setNumberOfItems, children }) => {
    
    //! States ///////

    const [total, setTotal] = useState(0);

    //! //////////////////////////////////////////////////////////////////////////////////

    //** Ciclo de vida */

  //? Montaje

  //? Actualización
  
  useEffect(() => {           // Si se realizan cambios en el carrito, se actualiza precio
                                    
    let suma = 0;
    for (let i = 0; i < cart.length; i++){
    suma += cart[i].quantity * cart[i].price;
    }
    setTotal(suma.toFixed(2));      

  }, [cart]); 

  //? Desmontaje 

  //** //////////////////////////////////////////////////////////////////////////// */

    //** Handlers */

    const handlerAddItemToCart = (index) => {
        
        let changeCart = [...cart];        
        changeCart[index].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(changeCart));
        
        
        let suma = 0;

        for (let i = 0; i < changeCart.length; i++){
        suma += changeCart[i].quantity;
        }

        setNumberOfItems(suma);       
        setCart(changeCart);
    };
    
    const handlerRemoveItemToCart = (index) => {

        let changeCart = [...cart];        
        changeCart[index].quantity -= 1; 
        if (changeCart[index].quantity == 0) changeCart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(changeCart));
        
        
        let suma = 0;

        for (let i = 0; i < changeCart.length; i++){
        suma += changeCart[i].quantity;
        }
        
        setNumberOfItems(suma);       
        setCart(changeCart);
    };
    

    return (
      <>
        <div className="shopping-table-container">
        <div className="cart-options">
                {children}
            </div>
            <table className="shopping-cart-table">
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {cart.map((item, index) => (
                    <tr key={index}>
                    <td>
                        <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px' }} />
                    </td>
                    <td className="name-cell">{item.name}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                        <td>
                            <div className="options-bill-item">
                                <i className="material-symbols-outlined" onClick={() => handlerAddItemToCart(index)}>add</i>
                                <i className="material-symbols-outlined" onClick={() => handlerRemoveItemToCart(index)}>remove</i>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>  
            <div className="total-bill">
                <h3>Total: ${total}</h3>
            </div>          
        </div>
      </>
    );
  };
  
  
  
  
  