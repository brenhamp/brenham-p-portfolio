import React from 'react';
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {
  return (
    <section className="container">
    <div className="project">
      <h2 className="title">My Portfolio</h2>
      <hr></hr>
    </div>

    <Wrapper id="card-data">
      {portfolio.map((project) => (
        <ProjectList key={project.id} image={project.image} name={project.name} github={project.github} deployment={project.deploy} topics={project.topics}/>
      ))}
    </Wrapper>
  </section>

);
}
  );
}
export default Portfolio;
