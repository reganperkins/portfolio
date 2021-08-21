import styles from "./styles.module.scss"
import { ReactComponent as Hand } from './assets/hand.svg';

function WaveButton() {
  return (
    <a href="#contact" className={styles.sayHi}>
      <Hand className={styles.hand} />Say hi
    </a>
  );
}

export default WaveButton;
