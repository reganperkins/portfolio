import { useLayoutEffect, useState } from "react";
import styles from "./Nav.module.scss"

function Nav() {
  const [show, setShow] = useState(false);
  useLayoutEffect(() => {
    const setNavVisibility = () => {
      setShow(window.scrollY < 100)
    };
    setNavVisibility();
    window.addEventListener("scroll", setNavVisibility);
    return () => window.removeEventListener("scroll", setNavVisibility);
  }, []);

  const navClasses = `${show ? 'fade-in-down animation-delay-350' : 'fade-out-up'}`;
// console.log(navClasses)
  return (
    <nav className={navClasses}>
      <ul className={styles.navList}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
