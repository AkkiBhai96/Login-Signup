import "./styles.css";
import logo from "../images/logo.png";

export default function App() {
  return (
    <div className="App">
      <div class="m-4">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
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
    </div>
  );
}
