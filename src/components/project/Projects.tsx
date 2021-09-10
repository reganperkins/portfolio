import projectsData  from './projects-data';
import Project  from './Project';
// import styles from "./Projects.module.scss";
// import { ReactComponent as BlobSlant } from './assets/blob-slant.svg';
// import useScrollAnimation from '../../hooks/useScrollAnimation';

interface ProjectsProp {
  sectionClass: string;
}

function App(props: ProjectsProp) {

  const backgroundColors = ['blue', 'yellow', 'pink'];
  let colorIndex = -1;
  const projects = projectsData.map((data) => {
    colorIndex = colorIndex < backgroundColors.length -1 ? colorIndex + 1 : colorIndex = 0;

    return <Project
      key={data.id}
      {...data}
      color={backgroundColors[colorIndex]}
    />
  });

  return (
    <section id="work" className={props.sectionClass}>
      <h2 className="section-padding">Achievements</h2>
      { projects }
    </section>
  );
}

export default App;
