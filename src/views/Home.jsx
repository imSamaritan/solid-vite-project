import { createResource, Show, For } from "solid-js"
import ProductService from "../services/ProductService.js"
import Card from "../components/Card.jsx"
import { useCartContext } from "../context/CartContext"

const Home = () => {
  const [products] = createResource(ProductService.all)
  const { items, setCart } = useCartContext()

  const addToCart = (product) => {
    //Check if the product is already in the cart
    const itemExists = items.find((item) => item.id === product.id)

    if (itemExists) {
      setCart(
        (prev) => prev.id === product.id,
        "quantity",
        (q) => ++q
      )
    }

    if (!itemExists) {
      setCart([...items, { ...product, quantity: 1 }])
    }
  }
  return (
    <main class="container">
      <div class="row">
        <Show when={products()} fallback={<p>Loading...</p>}>
          <For each={products()}>
            {(product) => {
              return (
                <div class=" col-sm-12 col-md-6 col-lg-6 col-xlg-4">
                  <Card rounded={false} flat={true}>
                    <div class="card-image text-center">
                      <img
                        class="w-50 rounded-circle"
                        src={product.img}
                        alt={product.description}
                      />
                    </div>
                    <h4 class="card-title lead text-center my-3 fw-semibold">
                      {product.title}
                    </h4>
                    <div class="card-text">
                      <p class="lead text-center">
                        {product.description.slice(0, 50)}...
                      </p>
                      <div class="d-flex justify-content-between align-items-center">
                        <p class="lead display-5">ZAR{product.price}</p>
                        <p>
                          <a
                            onClick={() => addToCart(product)}
                            href={`#`}
                            class="mx-1 btn btn-warning py-2 px-3"
                          >
                            Add To Cart
                          </a>
                          <a
                            href={`/products/${product.id}`}
                            class="mx-1 btn btn-dark py-2 px-3"
                          >
                            Details
                          </a>
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            }}
          </For>
        </Show>
      </div>
    </main>
  )
}

export default Home
