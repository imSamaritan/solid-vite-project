const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-md bg-light m5-5 fixed-top">
        <div class="container">
          <a href="/" class="navbar-brand fw-bold text-uppercase text-warning">
            Merch
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-0">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/cart">
                    Cart
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />
    </>
  )
}

export default Navbar
