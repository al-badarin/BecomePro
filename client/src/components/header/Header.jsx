import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/">
            <span>BecomePro</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav">
                {/* TODO: change active class dynamically */}
                {/* HOME */}
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>

                 {/* ARTICLES */}
                 <li className="nav-item">
                  <Link className="nav-link" to="/articles">
                    Articles Catalog
                  </Link>
                </li>

                {/* ABOUT */}
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    Why us
                  </Link>
                </li>

                {/* TRAINERS */}
                <li className="nav-item">
                  <Link className="nav-link" to="/trainers">
                    Trainers
                  </Link>
                </li>

                {/* CONTACT */}
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>

                {/* LOGIN */}
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>

                {/* REGISTER */}
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>

                  {/* LOGOUT */}
                  <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              </ul>

              {/* SEARCH */}
              {/* TODO: move as a separate component */}
              <div className="user_option">
                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  ></button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
