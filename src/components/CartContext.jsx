import { createContext, useState } from "react";

import { getStock } from "../api";

const CartContext = createContext({
  items: [],
  getStockQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  // {Id: 1, quantity: 1}

  function getStockQuantity(id) {
    const quantity = cartProducts.find((stock) => stock.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getStockQuantity(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((stock) =>
          stock.id === id ? { ...stock, quantity: quantity + 1 } : stock
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getStockQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((stock) =>
          stock.id === id ? { ...stock, quantity: quantity - 1 } : stock
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getStock(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextvalue = {
    items: cartProducts,
    getStockQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextvalue}>{children}</CartContext.Provider>
  );
}

export default CartContext;
