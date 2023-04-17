import classes from "./Meals.module.css";
import MealsList from "./MealsList";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 1716.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 1242.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 924.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 1386.99,
  },
];
const Meals = () => {
  return (
    <Card className={classes.meals}>
    <ul>
      {DUMMY_MEALS.map((meal) => {
        return (
          <MealsList
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        );
      })}
    </ul>
    </Card>
  );
};

export default Meals;
