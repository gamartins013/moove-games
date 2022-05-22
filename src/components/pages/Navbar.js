import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className={styles.menuContainer}>
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <a className={styles.menuLogo}>
        <img src="/assets/img/logo.png" alt="LOGO" />
      </a>
      <div className={styles.menu}>
        <div className={styles.menuEsquerdo}>
          <ul>
            <li>
            <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Ranking">Ranking</Link>
            </li>
            <li>
              <Link to="/Jogos">Jogos</Link>
            </li>
            <li>
            <Link to="/Sobre">Sobre</Link>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <Link to="/Cadastrar">Cadastrar</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
