
interface ProjectProp {
  title: string;
  imageName: string;
}

function Project(props: ProjectProp) {
  return (
    <li>
      <h3>{ props.title }</h3>
      <img src={`/images/projects/${props.imageName}`} alt={props.title} />
    </li>
  );
}

export default Project;
