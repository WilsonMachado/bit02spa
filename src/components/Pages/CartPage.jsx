import React from 'react'
import { ShoppingCartTable } from '../ShoppingCartTable'

export const CartPage = () => {
  return (
    <div className="cart-container">
        <h2>Bill</h2>
        <ShoppingCartTable cartItems={[
            {
                "id": 7,
                "quantity": 8,
                "img": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e8/Chainmail_Chestplate_%28item%29_JE2_BE2.png",
                "name": "Chainmail Chestplate",
                "price": 69.99
            },
            {
                "id": 7,
                "quantity": 1,
                "img": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e8/Chainmail_Chestplate_%28item%29_JE2_BE2.png",
                "name": "Chainmail Chestplate",
                "price": 69.99
            },
            {
                "id": 7,
                "quantity": 8,
                "img": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e8/Chainmail_Chestplate_%28item%29_JE2_BE2.png",
                "name": "Chainmail Chestplate",
                "price": 69.99
            },
            {
                "id": 7,
                "quantity": 1,
                "img": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e8/Chainmail_Chestplate_%28item%29_JE2_BE2.png",
                "name": "Chainmail Chestplate",
                "price": 69.99
            },
            {
                "id": 7,
                "quantity": 8,
                "img": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e8/Chainmail_Chestplate_%28item%29_JE2_BE2.png",
                "name": "Chainmail Chestplate",
                "price": 69.99
            },
            {
                "id": 7,
                "quantity": 1,
                "img": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e8/Chainmail_Chestplate_%28item%29_JE2_BE2.png",
                "name": "Chainmail Chestplate",
                "price": 69.99
            },
            {
                "id": 7,
                "quantity": 8,
                "img": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e8/Chainmail_Chestplate_%28item%29_JE2_BE2.png",
                "name": "Chainmail Chestplate",
                "price": 69.99
            },
            {
                "id": 7,
                "quantity": 1,
                "img": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e8/Chainmail_Chestplate_%28item%29_JE2_BE2.png",
                "name": "Chainmail Chestplate",
                "price": 69.99
            },
            {
                "id": 7,
                "quantity": 8,
                "img": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e8/Chainmail_Chestplate_%28item%29_JE2_BE2.png",
                "name": "Chainmail Chestplate",
                "price": 69.99
            },
            {
                "id": 7,
                "quantity": 1,
                "img": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e8/Chainmail_Chestplate_%28item%29_JE2_BE2.png",
                "name": "Chainmail Chestplate",
                "price": 69.99
            },
        ]}>
            <button>Clear cart</button>
            <button>Checkout</button>
        </ShoppingCartTable>
    </div>
  )
}
