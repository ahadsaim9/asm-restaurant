import logo from "../../../public/images/logo1.png";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#" className="nav-item">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              <img className="logo" src={logo} alt="" />
            </a>
          </li>

          <li>
            <a href="#" className="nav-item">
              Booking
            </a>
          </li>
          <li className="dropdown">
            <a href="#" className="nav-item ">
              Blog
            </a>
            <div className="dropdown-menu">
              <a href="#">BLOG</a>
              <a href="#">SINGLE BLOG</a>
            </div>
          </li>
          <li>
            <a href="#" className="nav-item">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
