import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
export default function MealItem({meal}){
    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}></img>
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-descrpiption">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button>Add to Card</Button>
            </p>
        </article>
    </li>
}