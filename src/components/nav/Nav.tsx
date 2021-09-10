import { useLayoutEffect, useState } from "react";
import styles from "./Nav.module.scss"

function Nav() {
  let initialRender = true;
  const [show, setShow] = useState(false);
  useLayoutEffect(() => {
    const setNavVisibility = () => {
      initialRender = false;
      setShow(window.scrollY < 150);
    };
    setShow(window.scrollY < 100);
    window.addEventListener("scroll", setNavVisibility);
    return () => window.removeEventListener("scroll", setNavVisibility);
  }, []);

  let navClasses = '';

  if (initialRender) {
    navClasses = show ? 'fade-in-down animation-delay-350' : '';
  } else {
    navClasses = `${show ? 'fade-in-down' : 'fade-out-up'}`;
  }

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
