import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.navbar__logo} href="#init">Bruno Souza</a>
      <div className={`${styles.nav_link} ${isOpen ? styles.active : ""}`}>
        <ul>
          <li><a onClick={toggleMenu} href="#about">Sobre mim</a></li>
          <li><a onClick={toggleMenu} href="#know">Conhecimento</a></li>
          <li><a onClick={toggleMenu} href="#projects">Projetos</a></li>
          <li><a onClick={toggleMenu} href="#contact">Contato</a></li>
        </ul>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default React.memo(Navbar);