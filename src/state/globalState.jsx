import { useState } from 'react';
import DataContext from './dataContext';

function GlobalState(props) {
  const [cart, setCart] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [user, setUser] = useState({ id: 42, name: 'Sergio' });

  function addProductToCart(prod) {
    let copy = [...cart, prod];    
    setCart(copy);
  }

  function removeProductFromCart() {}

  return (
    <DataContext.Provider
      value={{
        cart: cart,
        shoppingList: shoppingList,
        user: user,

        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default GlobalState;
