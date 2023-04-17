import classes from "./MealsItemForm.module.css";

const MealsItemForm = (props) => {
  return (
    <form className={classes.form}>
      <div className={classes.input}>
        <label for="amount">Amount</label>
        <input id="amount" type="number" value={1} />
      </div>
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealsItemForm;
