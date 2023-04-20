import CartContext from "./cart-context";
import { useState } from "react";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalFoodAmount, setTotalFoodAmount] = useState(Number(0));

  const addItemInCartHandler = (item) => {
    const existingItemIndex = cartItems.findIndex(prevItem => prevItem.id === item.id);
    const existingCartItem = cartItems[existingItemIndex];
    let updatedItems;
    if(existingCartItem){
      const updatedItem = {...existingCartItem, amount:Number(existingCartItem.amount) + Number(item.amount)};
      updatedItems = [...cartItems];
      updatedItems[existingItemIndex] = updatedItem;
    }
    else {
      updatedItems = [...cartItems, item];
    }
    setCartItems(updatedItems);

    setTotalFoodAmount((prevTotal) => {
      const totalPrice = prevTotal + item.price * Number(item.amount);
      return totalPrice;
    });
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: cartItems,
    totalAmount: totalFoodAmount,
    addItem: addItemInCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
