//CSS
import styles from "./Header.module.css";
//REACT ROUTER DOM
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <p>
          Aero <span>Adventure</span>
        </p>
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Destinations">Destinations</Link>
          </li>
          <li>
            <Link to="/FlightExperiences">Flight Experiences</Link>
          </li>
          <li>
            <Link to="/HotelsResorts">Hotels and Resorts</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
