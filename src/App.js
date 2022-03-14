import "./styles.css";
import logo from "../images/logo.png";

export default function App() {
  return (
    <div className="App">
      <div class="m-4">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid navbar-header">
            <a href="#" class="navbar-brand">
              <img
                class="navbar-image"
                src={logo}
                height="28"
                alt="CoolBrand"
              />{" "}
              Euphonious Poems
            </a>
            <button
              type="button"
              class="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav">
                <a href="#" class="nav-item nav-link active">
                  Home
                </a>
                <a href="#" class="nav-item nav-link">
                  Poems
                </a>
                <a href="#" class="nav-item nav-link">
                  Blogs
                </a>
              </div>
              <div class="navbar-nav ms-auto">
                <a href="#" class="nav-item nav-link">
                  Login
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="card-group">
        <div class="card">
          <img class="card-img-top" src={logo} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={logo} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={logo} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
