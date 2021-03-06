import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
        id: 1,
      name: 'One Stop Shop',
      category: 'group-project',
      image: '../assets/large/group-project/0.jpg',
      repo: 'https://github.com/brenhamp/one-stop-shop',
      deployment: 'https://group1-one-stop-shop.herokuapp.com/',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
        id:2,
      name: 'MyAnimeFinder',
      category: 'group-project',
      image: '../assets/large/group-project/1.jpg',
      repo: 'https://github.com/EthanRugh/project-1',
      deployment: 'https://ethanrugh.github.io/project-1/',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
        id: 3,
      name: 'Budget Tracker',
      category: 'project',
      image: '../assets/large/project/0.jpg',
      repo: 'https://github.com/brenhamp/budget-tracker',
      deployment: 'https://brenhamp.github.io/budget-tracker',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {   id: 4,
      name: 'Social Network API',
      category: 'project',
      image: '../assets/large/project/1.jpg',
      repo: 'https://github.com/brenhamp/social-network-api',
      deployment: 'https://brenhamp.github.io/social-network-api',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {   id: 5,
      name: 'Tech Blog',
      category: 'project',
      image: '../assets/large/project/2.jpg',
      repo: 'https://github.com/brenhamp/tech-blog',
      deployment: 'https://brenhamp.github.io/tech-blog',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {   id: 6,
      name: 'E-commerce Back End',
      category: 'project',
      image: '../assets/large/project/3.jpg',
      repo: 'https://github.com/brenhamp/e-commerce-back-end',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {   id: 
      name: 'Employee Tracker',
      category: 'project',
      image: '../assets/large/project/4.jpg',
      repo: 'https://github.com/brenhamp/employee-tracker-2.0',
      deployment: 'https://brenhamp.github.io/employee-tracker-2.0',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {   id: 
      name: 'Note Taker',
      category: 'project',
      image: '../assets/large/project/5.jpg',
      repo: 'https://github.com/brenhamp/note-taker',
      deployment: 'https://brenhamp.github.io/note-taker',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {   id: 
      name: 'Team Profile Generator',
      category: 'project',
      image: '../assets/large/project/6.jpg',
      repo: 'https://github.com/brenhamp/team-profile-generator',
      deployment: 'https://brenhamp.github.io/team-profile-generator',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {   id: 
      name: 'Weather Dashboard',
      category: 'project',
      image: '../assets/large/project/7.jpg',
      repo: 'https://github.com/brenhamp/weather-dashboard',
      deployment: 'https://brenhamp.github.io/weather-dashboard',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {   id: 
      name: 'Work Day Scheduler',
      category: 'project',
      image: '../assets/large/project/8.jpg',
      repo: 'https://github.com/brenhamp/work-day-scheduler',
      deployment: 'https://brenhamp.github.io/work-day-scheduler',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {   id: 
      name: 'Code Quiz',
      category: 'project',
      image: '../assets/large/project/9.jpg',
      repo: 'https://github.com/brenhamp/code-quiz',
      deployment: 'https://brenhamp.github.io/code-quiz',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {   id: 
      name: 'Password Generator',
      category: 'project',
      image: '../assets/large/project/10.jpg',
      repo: 'https://github.com/brenhamp/password-generator',
      deployment: 'https://brenhamp.github.io/password-generator',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
  ]);

  const currentProjects = projects.filter(project => project.category === category);

  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
