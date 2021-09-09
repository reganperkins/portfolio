import styles from "./Project.module.scss";
import GridItem from './GridItem'

interface ProjectProp {
  title: string;
  description?: string;
  containerClass?: string;
  topics: { title: string; description: string; }[];
  children?: JSX.Element | JSX.Element[];
}

function Project(props: ProjectProp) {

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
      {props.children}
    </article>
  );
}

export default Project;
