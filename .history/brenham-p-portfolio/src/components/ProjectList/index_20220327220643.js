
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Individual Cards 
function ProjectList(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src=`./assets/images/large/project/$` />
        </div>
        <div className="content">
              <p className="card-title">{props.name}</p>
              <p className="project-icons">

              <a href={props.repository}><img class="project-icon" src="https://img.icons8.com/glyph-neue/128/github.png" alt="GitHub Repo" /> </a> 

              <a href={props.deployment}><img class="project-icon" src="https://img.icons8.com/external-prettycons-flat-prettycons/94/external-web-web-and-seo-prettycons-flat-prettycons.png" alt="Live Application" /></a> 
       
             
             </p>
        </div>
      </div>
    );
}
  
  export default ProjectList;