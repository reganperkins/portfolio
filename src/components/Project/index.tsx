
import GridItem from './grid-item'
import styles from './styles.module.scss'

interface ProjectProp {
  title: string;
  imageName: string;
  description?: string;
  topics: { title: string; description: string; }[];
}

function Project(props: ProjectProp) {

  return (
    <div className={`${styles.projectContainer} section-padding`}>
    <img src={`/images/projects/${props.imageName}`} className="half" alt={props.title} />
      <div className="projectContent half">
        <h3>{ props.title }</h3>
        <p>{ props.description }</p>

        <div className={styles.grid}>
          {props.topics.map((topic) =>
            <GridItem
              title={topic.title}
              description={topic.description}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
