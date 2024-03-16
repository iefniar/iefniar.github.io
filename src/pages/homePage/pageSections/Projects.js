import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/Card';
import classes from './Projects.module.css';
import Project1 from '../../../img/project-1.png';
import Project2 from '../../../img/project-2.png';
import ArrorRight from '../../../icons/lets-icons_arrow-right-long-light.svg';

const Projects = (props, ref) => {
  return (
    <div className={classes['projects-container']} ref={ref}>
      <div className={classes['card-area']}>
        <Card image={Project1} icon={ArrorRight} />
        <Link to='/project-1'>Explore project 1</Link>
      </div>
      
      <div className={classes['text-area']}>

      </div>
    </div>
  );
}

export default forwardRef(Projects);