import {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";
import classes from "./css/HeaderCarButton.module.css";

const HeaderCartButton = props => {

    const cartContext = useContext(CartContext);
    const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => currentNumber + item.amount, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
};

export default HeaderCartButton;