import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './Projects.module.css';


const Projects = (props, ref) => {
  return (
    <div className={classes['projects-container']} ref={ref}>
      <div className={classes['projects-content']}>
        <h2>Projects</h2>
        Project 1
      </div>
      
      <Link to='/project-1'>Explore project 1</Link>
    </div>
  );
}

export default forwardRef(Projects);