import { useRef } from "react";
import GridItem from './GridItem'
import { ReactComponent as BlobSlant } from './assets/blob-slant.svg';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from "./Projects.module.scss";

interface ProjectProp {
  title: string;
  description?: string;
  color: string;
  desktopImage: string;
  layout?: string;
  topics: { title: string; description: string; }[];
  children?: JSX.Element | JSX.Element[];
}

function Project(props: ProjectProp) {
  let blob;
  let desktopImage;

  const desktopRef = useRef(null);
  const { show, showPercent } = useScrollAnimation(desktopRef);

  const baseX = 100 - showPercent;
  const desktopImageStyles = {
    transform: `translateY(${baseX}px)`,
  }

  if (props.layout === 'left' || props.layout === 'right') {
    let blobClass = '';
    blobClass = styles[`blob${props.layout}`];
    blob = <BlobSlant className={`${styles.blob} ${styles[props.color]} ${blobClass}`}/>;
  }
  desktopImage = <img ref={desktopRef} src={`/images/projects/${props.desktopImage}`} width="605" height="405" style={desktopImageStyles} className={styles.projectDesktopImage} alt={props.title} />;

  return (
    <article className={`${props.layout}-section project-container section-padding`}>
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
        { desktopImage }
        { props.children }
      </div>
    </article>
  );
}

Project.defaultProps = {
  color: 'blue',
  desktopImage: 'dribbble-1-5.png'
} as Partial<ProjectProp>;

export default Project;
