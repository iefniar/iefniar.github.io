import { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/Card';
import classes from './Projects.module.css';
import Project1 from '../../../img/project-1.png';
import Project2 from '../../../img/project-2.png';

const Projects = (props, ref) => {
  const [mainCardItem, setMainCardItem] = useState({
    cardImage: Project1,
    cardLink: '/project-1'
  });

  return (
    <div className={classes['projects-container']} ref={ref}>
      <div className={classes['text-area']}>
        <div className={classes['text-type-1']}>
          my
        </div>
        <div className={classes['text-type-2']}>
          projects
        </div>
      </div>
      <div className={classes['card-area']}>
        <div className={classes['small-card-items']}>
          <div className={classes['individual-item']}>
            <Link to='' onClick={()=>{
              setMainCardItem({
                cardImage: Project1,
                cardLink: '/project-1'
              })
            }}>
              <img className={classes['small-img']} src={Project1} alt="project 1 small preview" id='img-1' />
            </Link> 
            <h4>e-commerce app</h4>
          </div>
          <div className={classes['individual-item']}>
            <Link to='' onClick={()=>{
              setMainCardItem({
                cardImage: Project2,
                cardLink: '/project-2'
              })
            }}>
              <img className={classes['small-img']} src={Project2} alt="project 2 small preview" id='img-2' />
            </Link> 
            <h4>landing page of a restaurant</h4>
          </div>
        </div>
        <div className={classes['main-card']}>
          <Card image={mainCardItem.cardImage} link={mainCardItem.cardLink} />
        </div>
      </div>
      
    </div>
  );
}

export default forwardRef(Projects);