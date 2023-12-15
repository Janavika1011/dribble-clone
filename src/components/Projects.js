import React from 'react';
import Project from './Project';

function Projects() {
    const generateRandomViews = () => Math.floor(Math.random() * 1000) + 1;

  const projectData = [
    { name: 'Project 1', team: 'Coric Design', imageUrl: 'https://cdn.dribbble.com/userupload/11926147/file/original-2401ccceb397dc390fbe61c546c1cc06.jpg?resize=400x300&vertical=center', views: 120 },
    { name: 'Project 2', team: 'Ben didier', imageUrl: 'https://cdn.dribbble.com/userupload/11755702/file/original-b2eadace2796480e64c7a1b3c7603925.jpg?resize=400x300&vertical=center', views: 320 },
    { name: 'Project 3', team: 'Ronas ITUI/UX Team', imageUrl: 'https://cdn.dribbble.com/userupload/11947355/file/still-bb60a8a0bbb5354f64eb6bfb2f1c20af.png?resize=400x300&vertical=center', views: 500 },
    { name: 'Project 4', team: 'Focus Lab', imageUrl: 'https://cdn.dribbble.com/userupload/11927111/file/original-e289ae043a475a3eaf2b2f9bab96c4d9.jpg?resize=400x300&vertical=center', views: 600 },
    { name: 'Project 5', team: 'Monty Hayton', imageUrl: 'https://cdn.dribbble.com/userupload/11937708/file/original-7c8f21aa084bdaaeae718bd3e47be201.jpg?crop=1061x1444-1937x2101&resize=400x300&vertical=center', views: 370 },

    { name: 'Project 6', team: 'Vedant Hegde', imageUrl: 'https://cdn.dribbble.com/userupload/11922109/file/still-33c98ddea93ef46762c067c8a1a7e941.png?resize=400x300&vertical=center', views: 890 },
    { name: 'Project 7', team: 'Manuel Cetina', imageUrl: 'https://cdn.dribbble.com/userupload/11924052/file/original-5d24bedbe7237e68d2ec240853da5b70.png?resize=400x300&vertical=center', views: 790 },

    { name: 'Project 8', team: 'Ethan Fender', imageUrl: 'https://cdn.dribbble.com/userupload/11906449/file/original-4704559518a497e0fbf9ee09292958e9.jpg?resize=400x300&vertical=center', views: 234 },

    { name: 'Project 9', team: 'Lucian Radu', imageUrl: 'https://cdn.dribbble.com/userupload/11922770/file/still-2d159b5e80707a7426deec27453dc269.png?resize=400x300&vertical=center', views: 600 },

    { name: 'Project 10', team: 'Tubik', imageUrl: 'https://cdn.dribbble.com/userupload/11934143/file/original-e576d5abacd27d24f8d6a29698c61b9a.png?resize=400x300&vertical=center', views: 320 },

    { name: 'Project 11', team: 'Extej Design Agency', imageUrl: 'https://cdn.dribbble.com/userupload/11794101/file/still-2b4b5b7b831c05a9d012db454e684d54.png?resize=400x300&vertical=center', views: 320 },

  ];

  return (
    <div>
      {projectData.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          team={project.team}
          imageUrl={project.imageUrl}
          views={project.views}
        />
      ))}
    </div>
  );
}

export default Projects;
