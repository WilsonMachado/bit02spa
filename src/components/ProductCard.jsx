const ProductCard = ({ index, name, description, image, price, cart, setCart, numberOfItems, setNumberOfItems, products}) => {  


  //** Handlers */
  
  const handlerAddItemToCard = () => {
    
    const isItemInCart = cart.filter(objeto => objeto.id === products[index].id); // Verifica si el producto que se desea agregar ya estaba en el carrito
    
    if(isItemInCart.length == 0){         // Si el prodcuto no se encuentra     
       
      const product = {                   // Es la primera vez que agregará el producto al carrito
        id: products[index].id,
        quantity: 1,
        img: products[index].img,
        name: products[index].name,
        price: products[index].price,
  
      };   
      
      const updatedCart = [...cart, product];
      setCart(updatedCart);                   // Y se actualiza el carriento con el nuevo objeto
      
    }else{
      
      const indexRepeatedItem = cart.findIndex((objeto, key) => {       // Se busca el index del item repetido en el arreglo de carrito
        return objeto.id === products[index].id && cart.findIndex((obj, i) => i !== key && obj.id === products[index].id) !== +1;
      });                                           
      
      const changeCart = [...cart];
      changeCart[indexRepeatedItem].quantity += 1; 
      setCart(changeCart);                                              // Y solo se actualiza la cantidad
       
      
      
    }

    const currentQuatityItems = numberOfItems;
    setNumberOfItems(currentQuatityItems + 1);
  };

  //** //////////////////////////////////////////////////////////////////////////// */
  
  return (
    <div className="card">
      <div className="card-header">        
        <p className="card-price">${price}</p>
        <i className="material-symbols-outlined" onClick={handlerAddItemToCard}>add_shopping_cart</i> 
      </div>
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>       
        
      </div>
    </div>
  );
};

export default ProductCard;