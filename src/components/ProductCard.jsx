import React from 'react';

const ProductCard = ({ name, description, image, price }) => {
  return (
    <div className="card">
      <div className="card-header">        
        <p className="card-price">${price}</p>
        <span class="material-symbols-outlined">add_shopping_cart</span>     
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