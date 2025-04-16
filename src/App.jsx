import Banner from "./components/Banner"
import Navbar from "./components/Navbar"

function App(props) {
  return (
    <>
      <header class="container mb-3">
        <Navbar />
        <Banner />
      </header>

      <main class="container">{props.children}</main>
    </>
  )
}

export default App
