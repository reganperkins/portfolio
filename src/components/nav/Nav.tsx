import styles from "./Nav.module.scss"
import useWindowScrollPosition from '../../hooks/useWindowScrollPosition';

function Nav() {
  const { scrollPos } = useWindowScrollPosition();
  const show = scrollPos < 200;
  
  return (
    <nav className={`${show ? 'fade-in-down animation-delay-350' : 'fade-out-up'}`}>
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
