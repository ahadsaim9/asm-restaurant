import "../NavBar/NavBar.css";
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
              <img className="logo" src="/public/images/logo.png" alt="" />
            </a>
          </li>

          <li>
            <a href="#" className="nav-item">
              Booking
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              Blog
            </a>
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
