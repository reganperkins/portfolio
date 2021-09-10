import projectsData  from './projects-data';
import Project  from './Project';
import React from 'react';

function Projects() {

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
    <React.Fragment>
      { projects }
    </React.Fragment>
  );
}

export default Projects;
