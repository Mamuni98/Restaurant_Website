import classes from "./MealsList.module.css";
import MealsItemForm from "./MealsItemForm";
const MealsList = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>Rs.{props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealsItemForm id={props.id}/>
      </div>
    </li>
  );
};
export default MealsList;
