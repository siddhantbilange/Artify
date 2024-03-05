import React, { createContext, useContext, useReducer } from 'react'

export const CartContext = createContext(null);
export const CartActionType = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    UPDATE: 'UPDATE'
}

const cartResucer = (state, action) => {
    const clonedState = [...state];
    const indexOf = clonedState.findIndex(item => item.size === action.payload.size);
    switch (action.type) {
        case CartActionType.ADD:
            console.log(action.payload);
            if (indexOf === -1) {
                clonedState.push({ ...action.payload, quantity: (action.payload.quantity || 1) });
            }
            else {
                clonedState[indexOf] = { ...clonedState[indexOf], quantity: clonedState[indexOf].quantity + (action.payload.quantity || 1) }
            }
            break;
        case CartActionType.REMOVE: {
            if (indexOf !== -1)
                clonedState.splice(indexOf, 1);
            break;
        }
        case CartActionType.UPDATE: {
            if (indexOf === -1)
                break;
            else if (action.payload.quantity === 0) {
                clonedState.splice(indexOf, 1);
            } else
                clonedState[indexOf].quantity = action.payload.quantity;
            break;
        }
        default:
            break;
    }
    return clonedState;
}

function CartContextProvider({ children }) {
    const [Cart, dispatch] = useReducer(cartResucer, []);
    const AddToCart = (product) => {
        console.log("dispatch");
        dispatch({ type: CartActionType.ADD, payload: product })
    };
    const RemoveFromCart = (product) => dispatch({ type: CartActionType.REMOVE, payload: product });
    const UpdateToCart = (product) => dispatch({ type: CartActionType.UPDATE, payload: product });
    // console.log(Cart);
    return (
        <CartContext.Provider value={{ Cart, AddToCart, RemoveFromCart, UpdateToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) throw Error("Cart Context must be used inside Provider")
    return context;
}