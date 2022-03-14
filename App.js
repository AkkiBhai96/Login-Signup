import "./styles.css";
import logo from "../images/logo.png";

export default function App() {
  return (
    <div className="App">
      <div class="m-4">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a href="#" class="navbar-brand">
              <img src={logo} height="28" alt="CoolBrand" />
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
                  Profile
                </a>
                <a href="#" class="nav-item nav-link">
                  Messages
                </a>
                <a href="#" class="nav-item nav-link disabled" tabindex="-1">
                  Reports
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
