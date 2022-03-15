import "./styles.css";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  return (
    <div className="App">
      {/* Start for NavBar*/}
      <div class="m-4">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid navbar-header">
            <a href="#" class="navbar-brand">
              <img
                class="navbar-image"
                src={logo}
                height="28"
                alt="CoolBrand"
              />
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
                  HOME
                </a>
                <a href="#" class="nav-item nav-link">
                  FAQ
                </a>
                <a href="#" class="nav-item nav-link">
                  CONTACT US
                </a>
                <a href="#" class="nav-item nav-link">
                  BLOGS
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
      {/* End for NavBar*/}
      {/* start for First cetagory */}
      <div class="conatiner-fluid">
        <p>
          <span class="card-Category">Desire</span>
        </p>
      </div>
      <div class="container-fluid card-container">
        <div class="card-group">
          <div class="card">
            <img class="card-img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
              <p class="card-title">Card title</p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
              <p class="card-title">Card title</p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
              <p class="card-title">Card title</p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
              <p class="card-title">Card title</p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End for First cetagrory */}
      {/* start for second cetagrory */}
      <br />
      <div class="conatiner-fluid">
        <p>
          <span class="card-Category">Love</span>
        </p>
      </div>
      <div class="container-fluid card-container">
        <div class="card-group">
          <div class="card">
            <img class="card-img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
              <p class="card-title">Card title</p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
              <p class="card-title">Card title</p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
              <p class="card-title">Card title</p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
              <p class="card-title">Card title</p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End for second cetagory */}

      {/* start for Third cetagory */}
      <br />
      <div class="conatiner-fluid">
        <p>
          <span class="card-Category">Inspirational</span>
        </p>
      </div>
      <div class="container-fluid card-container">
        <div class="card-group">
          <div class="card">
            <img class="card-img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
              <p class="card-title">Card title</p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
              <p class="card-title">Card title</p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
              <p class="card-title">Card title</p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={logo} alt="Card image cap" />
            <div class="card-body">
              <p class="card-title">Card title</p>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End for Third cetagory */}
      {/* Start for Footer */}
      <br />
      <div class="container">
        <div class="footer">
          <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">
            <div class="col-md-8 col-12 mt-5">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur.
              </p>
            </div>
          </div>
          <hr class="clearfix d-md-none rgba-white-light" />
          <div class="row pb-3">
            <div class="col-md-12">
              <div class="mb-5 flex-center">
                <div>
                  <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright text-center py-3">
        © 2022 Copyright:
        <a href="#">BetaArrays</a>
      </div>
      {/* End for Footer */}
    </div>
  );
}
