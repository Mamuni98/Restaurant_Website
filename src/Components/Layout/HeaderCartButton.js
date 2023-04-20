import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const cartCnxt = useContext(CartContext);

  const numberOfCartItems = cartCnxt.items.reduce((currNumber, item) => {
    return currNumber + Number(item.amount);
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
