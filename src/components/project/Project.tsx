import GridItem from './GridItem'
import { ReactComponent as BlobSlant } from './assets/blob-slant.svg';
// import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from "./Projects.module.scss";

interface ProjectProp {
  title: string;
  description?: string;
  color: string;
  desktopImage: string;
  containerClass?: string;
  topics: { title: string; description: string; }[];
  children?: JSX.Element | JSX.Element[];
}

function Project(props: ProjectProp) {
  let blob;
  let blobClass 
  if (props.containerClass === 'right-section') {
    blobClass = styles.blobRight;
  } else if (props.containerClass === 'left-section') {
    blobClass = styles.blobLeft;
  }

  if (blobClass) {
    blob = <BlobSlant className={`${styles.blob} ${styles[props.color]} ${blobClass}`}/>
  }

  return (
    <article className={`${props.containerClass} project-container section-padding`}>
      <div className="project-content">
        <h3>{ props.title }</h3>
        <p>{ props.description }</p>
        <div className="project-grid">
          {props.topics.map((topic) =>
            <GridItem
              key={topic.title}
              title={topic.title}
              description={topic.description}
            />
          )}
        </div>
      </div>
      <div className="project-display">
        { blob }
        <img src={`/images/projects/${props.desktopImage}`} className={styles.projectDesktopImage} alt={props.title} />
        { props.children }
      </div>
    </article>
  );
}

Project.defaultProps = {
  color: 'blue',
} as Partial<ProjectProp>;

export default Project;
