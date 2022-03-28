
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectList(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="card-title">{props.name}</p>
              <p class="project-icons">
              <a href={props.github}><img class="project-icon" src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub Repository" /></a> 
              <a href={props.deploy}><img class="project-icon" src="https://img.icons8.com/ios/344/web.png" alt="Deployed Application" /></a> 
       
             
             </p>
        </div>
      </div>
    );
}
  
  export default ProjectList;