import { useEffect } from 'react';

export const ShoppingCartTable = ({ cart, setCart, setNumberOfItems, children }) => {

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
        <div className="cart-options">
            {children}
        </div>
      </>
    );
  };
  
  
  
  
  