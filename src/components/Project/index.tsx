
import GridItem from './grid-item'

interface ProjectProp {
  title: string;
  imageName: string;
  description?: string;
  containerClass?: string;
  topics: { title: string; description: string; }[];
}

function Project(props: ProjectProp) {

  return (
    <div className={`${props.containerClass} project-container section-padding`}>
      <div className="project-content">
        <h3>{ props.title }</h3>
        <p>{ props.description }</p>

        <div className="project-grid">
          {props.topics.map((topic) =>
            <GridItem
              title={topic.title}
              description={topic.description}
            />
          )}
        </div>
      </div>
      <img src={`/images/projects/${props.imageName}`} className="project-image" alt={props.title} />
    </div>
  );
}

export default Project;
