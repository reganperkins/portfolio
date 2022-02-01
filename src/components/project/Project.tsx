import { useRef } from "react";
import GridItem from './GridItem'
import ProgressiveImage from '../progressive-image/ProgressiveImage';
import { ReactComponent as BlobSlant } from './assets/blob-slant.svg';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from "./Projects.module.scss";

interface ProjectProp {
  title: string;
  description?: string;
  color: string;
  width: string;
  height: string;
  src: string;
  sources: {srcSet: string}[];
  layout?: string;
  topics: { title: string; description: string; }[];
  children?: JSX.Element | JSX.Element[];
}

function Project(props: ProjectProp) {
  let blob;

  const desktopRef = useRef(null);
  const { showPercent } = useScrollAnimation(desktopRef);

  const baseX = 100 - showPercent;
  const imageStyles = {
    transform: `translateY(${baseX}px)`,
  }

  if (props.layout === 'left' || props.layout === 'right') {
    let blobClass = '';
    blobClass = styles[`blob${props.layout}`];
    blob = <BlobSlant className={`${styles.blob} ${styles[props.color]} ${blobClass}`}/>;
  }

  return (
    <article className={`${props.layout}-section project-container section-padding`}>
      <div className="project-content">
        <h3>{ props.title }</h3>
        <p className={styles.description}>{ props.description }</p>
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
        <div
          ref={desktopRef}
          style={imageStyles}
        >
          <ProgressiveImage
            src={props.src}
            width={props.width}
            height={props.height}
            loading="lazy"
            className={styles.projectImage}
            alt={props.title}
            sources={props.sources}
          />
        </div>
        { props.children }
      </div>
    </article>
  );
}

Project.defaultProps = {
  color: 'blue',
} as Partial<ProjectProp>;

export default Project;
