const ProductCard = ({ index, name, description, image, price, cart, setCart, products}) => {  


  //** Handlers */
  
  const handlerAddItemToCard = () => {

    // Obtiene el producto actual según el índice
    const product = products[index];
    
    // Crea una nueva instancia del arreglo cart con el producto agregado
    const updatedCart = [...cart, product];

    // Actualiza el estado del carrito utilizando setCart
    setCart(updatedCart);
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