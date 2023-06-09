import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import { Link } from 'react-router-dom';
import { Modal } from '../Modal';

const products = [
  {
    id: 1,
    name: "Crossbow",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores reprehenderit nesciunt cupiditate sint autem distinctio!",
    img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4f/Arrow_Loaded_Crossbow.png/",
    price: 29.99 
  },
  {
    id: 2,
    name: "Apple",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores reprehenderit nesciunt cupiditate sint autem distinctio!",
    img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/af/Apple_JE3_BE3.png/",
    price: 9.99 
  },
  {
    id: 3,
    name: "Amethyst",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores reprehenderit nesciunt cupiditate sint autem distinctio!",
    img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/61/Amethyst_Shard_JE2_BE1.png",
    price: 99.99 
  },
  {
    id: 4,
    name: "Arrow",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores reprehenderit nesciunt cupiditate sint autem distinctio!",
    img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/25/Arrow_%28item%29_JE1_BE1.png/",
    price: 1.99 
  },
  {
    id: 5,
    name: "Bell",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores reprehenderit nesciunt cupiditate sint autem distinctio!",
    img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8c/Bell_%28item%29_JE1_BE1.png/",
    price: 0.99 
  },
  {
    id: 6,
    name: "Chainmail Helmet",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores reprehenderit nesciunt cupiditate sint autem distinctio!",
    img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/99/Chainmail_Helmet_%28item%29_JE2_BE2.png/",
    price: 39.99 
  },
  {
    id: 7,
    name: "Chainmail Chestplate",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores reprehenderit nesciunt cupiditate sint autem distinctio!",
    img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e8/Chainmail_Chestplate_%28item%29_JE2_BE2.png",
    price: 69.99 
  },
  {
    id: 8,
    name: "Chainmail Leggings",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores reprehenderit nesciunt cupiditate sint autem distinctio!",
    img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8b/Chainmail_Leggings_%28item%29_JE2_BE2.png/",
    price: 59.99 
  },
  {
    id: 9,
    name: "Chainmail Boots",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores reprehenderit nesciunt cupiditate sint autem distinctio!",
    img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8c/Chainmail_Boots_%28item%29_JE2_BE2.png/",
    price: 49.99
  },
  {
    id: 10,
    name: "Clock",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores reprehenderit nesciunt cupiditate sint autem distinctio!",
    img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3e/Clock_JE3_BE3.gif/",
    price: 29.99 
  },
  {
    id: 11,
    name: "Diamond",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores reprehenderit nesciunt cupiditate sint autem distinctio!",
    img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ab/Diamond_JE3_BE3.png/",
    price: 99.99 
  },
  {
    id: 12,
    name: "Eye of Ender",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maiores reprehenderit nesciunt cupiditate sint autem distinctio!",
    img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7a/Eye_of_Ender_JE2_BE2.png/",
    price: 99.99 
  },
];

export const ShopPage = ({cart, setCart, numberOfItems, setNumberOfItems}) => { 

    //! States ///////
  
    const [userLogged, setUserLogged] = useState(false);
    
    //! //////////////////////////////////////////////////////////////////////////////////

    //** Ciclo de vida */

    //? Montaje

    useEffect(() => {
      const currentCart = JSON.parse(localStorage.getItem('cart'));
      if(currentCart !== null){
        setCart(currentCart);
      }

      const currentUser = JSON.parse(localStorage.getItem('currentUser'));      
      setUserLogged(currentUser !== null);


    }, [])  

    //? Actualización  

    useEffect(() => {
      
      if(cart.length > 0){                                  //* Para garantizar que no vea el cambio en [cart] durante el cambio de contexto
        localStorage.setItem('cart', JSON.stringify(cart));
        let suma = 0;
        for (let i = 0; i < cart.length; i++){
          suma += cart[i].quantity;
        }
        setNumberOfItems(suma);

      }
      
    }, [cart]) 

    //? Desmontaje 

    //? //////////////////////////////////////////////////////////////////////////////////

  if (!userLogged){
    return (<Modal title={"Wow, wow, wow!"} text={"Take it easy, warrior! First, we need you to register and/or log in to manage your orders."}>
              <Link to={"/bit02spa/register"}>Register</Link>
              <Link to={"/bit02spa/login"}>Login</Link>
            </Modal>);
  }else{
    return (
      <div className='shop-container'>      
        
        <h2>Our products</h2>      
        
        {products.map((product, index) => (
          <ProductCard
            key={index}
            index={index}
            name={product.name}
            description={product.description}
            image={product.img}
            price={product.price}
            
            cart={cart}
            setCart={setCart}
            numberOfItems={numberOfItems}
            setNumberOfItems={setNumberOfItems} 
            products={products}/>          
        ))}
          
      </div>
    );
  }
}
