export const ShoppingCartTable = ({ cartItems, children }) => {
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
            {cartItems.map((item, index) => (
                <tr key={index}>
                <td>
                    <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px' }} />
                </td>
                <td className="name-cell">{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                    <td>
                        <div className="options-bill-item">
                            <i class="material-symbols-outlined">add</i>
                            <i class="material-symbols-outlined">remove</i>
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
  
  
  
  
  