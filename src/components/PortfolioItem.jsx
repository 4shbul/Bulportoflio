// src/components/PortfolioItem.jsx
import React from 'react';
import './PortfolioItem.css';

const PortfolioItem = ({ project }) => {
  return (
    <div className="portfolio-item card-base">
      <img src={project.image} alt={project.title} className="portfolio-image" />
      <div className="portfolio-info">
        <h3 className="portfolio-title">{project.title}</h3>
        <p className="portfolio-category text-dark">{project.category}</p>
        <p className="portfolio-description text-medium">{project.description}</p>
        <div className="portfolio-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-view-project">
          View Project <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;