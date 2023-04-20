import { useState } from "react";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Meals/MealsSummary";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartShown, setCartShown] = useState(false);
  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <CartProvider>
      <Header onCart={showCartHandler}/>
      {cartShown && <Cart onClose={hideCartHandler}/>}
      <MealsSummary />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
