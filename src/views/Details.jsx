import { useParams } from "@solidjs/router"
import { createResource, Show, createSignal } from "solid-js"
import ProductService from "../services/ProductService"
import Card from "../components/Card"
import { useCartContext } from "../context/CartContext"

const Details = () => {
  const params = useParams()
  const [product] = createResource(params.id, ProductService.find)
  const [totalChars, setTotalChars] = createSignal(56)

  const { items, setCart } = useCartContext()

  const addToCart = () => {
    //Check if the product is already in the cart
    const itemExists = items.find((item) => item.id === product().id)

    if (itemExists) {
      setCart(
        (prev) => prev.id === product().id,
        "quantity",
        (q) => ++q
      )
    }

    if (!itemExists) {
      setCart([...items, { ...product(), quantity: 1 }])
    }
  }

  return (
    <>
      <Show when={product()} fallback={<div>Loading...</div>}>
        <div class="col-12 col-lg-6 mx-auto mt-5">
          <Card rounded={false} flat={false} imgSize="50">
            <div class="card-image text-center">
              <img
                class="w-50 h-50 rounded-circle"
                src={product().img}
                alt={product().description}
              />
            </div>
            <div class="card-body">
              <div class="card-title">
                <h4>{product().title}</h4>
              </div>
              <div class="card-text">
                <p>
                  {product().description.slice(0, totalChars())}
                  <Show when={product().description.length > totalChars()}>
                    <a
                      href="#"
                      onClick={() =>
                        setTotalChars(product().description.length)
                      }
                    >
                      read more...
                    </a>
                  </Show>
                </p>
                <p class="lead display-5">${product().price}</p>
                <p>
                  <a
                    onClick={addToCart}
                    href={`#`}
                    class="mx-1 btn btn-warning py-2 px-3"
                  >
                    Add To Cart
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Show>
    </>
  )
}

export default Details
