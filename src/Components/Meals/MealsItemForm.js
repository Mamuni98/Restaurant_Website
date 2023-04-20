import classes from "./MealsItemForm.module.css";
import { useContext } from "react";
import Input from "../UI/Input";
import CartContext from "../../Store/cart-context";

const MealsItemForm = (props) => {
  const cartCnxt = useContext(CartContext);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const inputAmount = document.getElementById("amount_" + props.id).value;

    const cartItems = {
      id: props.id,
      name: props.items.name,
      price: props.items.price,
      amount: inputAmount,
    };

    cartCnxt.addItem(cartItems);
    document.getElementById("amount_" + props.id).value = "1";
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          defaultValue: "1",
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <button onClick={formSubmitHandler} type="submit">
        +Add
      </button>
    </form>
  );
};

export default MealsItemForm;
