import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_heading">
      <nav className="navbar navbar-expand-lg   ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Event TODO System
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">
                GetAllList
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
