

import React from 'react';
import { HeartIcon, EyeIcon } from "@heroicons/react/solid";
import './project.css';

function Project({ name, team, imageUrl, views }) {
  return (
    <div className="project-container">
      <img className="project-image" src={imageUrl} alt="" />
      <div className="project-details">
        <div className="project-info">
          <h3>{name}</h3>
          <h3>{team}</h3>
        </div>
        <div className="views-container">
          <EyeIcon className="eye-icon" />
          <span className="views-count">{views} views</span>
        </div>
        <div>
          <HeartIcon className="heart-icon" />
        </div>
      </div>
    </div>
  );
}

export default Project;
