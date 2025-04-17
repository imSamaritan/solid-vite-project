import Card from "../components/Card"
import { useCartContext } from "../context/CartContext"
import { For } from "solid-js"

const Cart = () => {
  const { items } = useCartContext()
  return (
    <main class="mt-5">
      <Card rounded={true} flat={false}>
        <div class="card-body">
          {items.length === 0 ? (
            <div class="text-center">
              <p class="text-center fs-2 text-danger">Empty Cart</p>
              <p class="fs-5">
                Please, add items to cart <a href="/">List products</a>
              </p>
            </div>
          ) : (
            <For each={items} fallback={<p>Loading...</p>}>
              {(item) => {
                return (
                  <div class="mb-3 border-bottom border-1">
                    <img
                      src={item.img}
                      style="width: 12%"
                      alt=""
                      class="d-block mb-2 rounded-circle"
                    />

                    <h4 class="text-danger">{item.title}</h4>
                    <p class="lead">Quantity: x{item.quantity}</p>
                    <p class="lead">
                      Total price: $
                      {(item.price * item.quantity * 1.49).toFixed(2)}
                    </p>
                  </div>
                )
              }}
            </For>
          )}
        </div>
      </Card>
    </main>
  )
}

export default Cart
