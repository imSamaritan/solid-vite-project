export const addToCart = ({ items, setCart, product }) => {
  //Check if the product is already in the cart
  const itemExists = items.find((item) => item.id === product.id)
  console.log(items)
  if (itemExists) {
    setCart(
      (prev) => prev.id === product.id,
      "quantity",
      (q) => ++q
    )
  }

  if (itemExists === false) {
    setCart([...items, { ...product, quantity: 1 }])
  }
}
