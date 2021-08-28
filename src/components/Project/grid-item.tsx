
import styles from './styles.module.scss'
interface ProjectProp {
  title: string;
  description: string;
}

function Project(props: ProjectProp) {
  return (
    <div className={styles.gridItem}>
      <h4>{props.title}</h4>
      <p className="smallBody">{props.description}</p>
    </div>
  );
}

export default Project;
