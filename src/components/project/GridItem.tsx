import styles from "./Project.module.scss";

interface ProjectProp {
  title: string;
  description: string;
}

function Project(props: ProjectProp) {
  return (
    <div>
      <h4>{props.title}</h4>
      <p className="small-body">{props.description}</p>
    </div>
  );
}

export default Project;
