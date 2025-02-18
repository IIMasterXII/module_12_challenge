import '../styles/Project.css';
import { useState } from 'react';

export default function Project(props) {
  const [isHovered, setIsHovered] = useState(false);
    return (
      <div className="col-md-6 col-lg-4 mb-4">
        <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="card border-0 text-white"
        style={{
          cursor: 'pointer',
        }}
        >
          <img className="card-img" src={props.image} alt={props.title}/>
          {isHovered ? (
          <div className="card-img-overlay fade-in">
            <div className="position-absolute top-50 start-50 translate-middle row">
              <a href="#" className="h3 card-title text-decoration-none text-uppercase text-center text-pretty">{props.title}</a>
              <div className="text-center">
                <a href="#" className="portfolio-link fw-bold text-light text-decoration-none text-uppercase">Github</a> / <a href="#" className="portfolio-link fw-bold text-light text-decoration-none text-uppercase">Website</a>
              </div>
            </div>
          </div>
          ) : 
          (
          <div></div>
          )}
        </div>
      </div>
    );
  }