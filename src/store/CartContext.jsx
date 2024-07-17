import { createContext, useState } from "react";
export const CartContext = createContext({
  openCart: () => {},
  closeCart: () => {},
  cartIsOpen: false,
  addToCart: () => {},
  removeFromCart: () => {},
  items: [],
});

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false)

  function addToCart(addID, addSize, addQuantity, addDrink) {
    setCartItems((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex(
        (item) => item.id === addID && item.size === addSize
      );

      if (itemIndex === -1) {
        updatedCart.push({ id: addID, size: addSize, quantity: addQuantity, drink:addDrink});
      } else {
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + addQuantity,
        };
      }
      console.log(updatedCart);
      return updatedCart;
    });
  }
  function removeFromCart(addID, addSize) {
    setCartItems((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex(
        (item) => item.id === addID && item.size === addSize
      );

      if (itemIndex === -1) {
        console.log('whoops')
      } else if (prevCart[itemIndex].quantity > 1) {
        updatedCart[itemIndex] = {
            ...updatedCart[itemIndex],
            quantity: prevCart[itemIndex].quantity - 1,
          };
      } else if(prevCart[itemIndex].quantity === 1) {
        updatedCart.splice(itemIndex, 1)
      }
      console.log(updatedCart);
      return updatedCart;
    });
  }
  function openCart() {
    setCartOpen(true)
  }
  function closeCart() {
    setCartOpen(false)
  }
  const cartContext = {
    addToCart,
    removeFromCart,
    items: cartItems,
    openCart,
    closeCart,
    cartIsOpen:cartOpen
  }
  return (<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>);
}
