import { NavLink } from "react-router-dom";
import logo from "assets/img/logo.png";
import styles from "./Navbar.module.scss";
import Protector from "components/Protector";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="logo" className={styles.nav_logo} />
      <ul className={styles.nav_links}>
        <li className={styles.nav_item}>
          <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? `${styles.nav_link} ${styles.active}`
                : `${styles.nav_link}`
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <Protector>
          <li className={styles.nav_item}>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? `${styles.nav_link} ${styles.active}`
                  : `${styles.nav_link}`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </Protector>
      </ul>
    </nav>
  );
};

export default Navbar;
