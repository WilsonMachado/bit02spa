import React from 'react';

const ProductCard = ({ index, name, description, image, price }) => {
  
  //** Handlers */
  
  const handlerAddItemToCard = () => {
    console.log(`Agregando item al carrito con nombre = ${index}`);
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