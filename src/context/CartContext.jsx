import { createContext, useContext } from "solid-js"
import { createStore } from "solid-js/store"

const CartContext = createContext()

export const CartContextProvider = (props) => {
  const [items, setCart] = createStore([])

  return (
    <CartContext.Provider value={{ items, setCart }}>
      {props.children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
