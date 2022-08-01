import CartContext from "./CartContext";


const CartProvider = props => {

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: (item) => {this.items.push(item)},
        removeItem: (id) => {

        }
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;