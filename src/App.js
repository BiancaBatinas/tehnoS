import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './Store/CartProvider';
function App() {

  const [showCart, setCart]= useState(false);

  const setShowCart = () => {
      setCart(true); //se afiseaza Cartu-ul
  };

  const setHideCart = () => {
      setCart(false); //Cart-ul este ascuns
  };
  return (
    <CartProvider>
      {showCart && <Cart onClose={setHideCart}/>}
      <Header onShowCart={setShowCart}/>
      <main>
      <Meals/>
      </main>
    </CartProvider>
    
  );
}

export default App;
