import { forwardRef, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/Card';
import classes from './Projects.module.css';
import Project1 from '../../../img/project-1.png';
import Project2 from '../../../img/project-2.png';
import { useTransform, useScroll, motion } from 'framer-motion';

const Projects = (props, ref) => {
  const cardsContainer = useRef(null);
  const { scrollYProgress: scrollYProgressCardsContainer } = useScroll({
      target: cardsContainer,
      offset: ["1.33 1.33", "1 1"]
  });

  const y1Card1Container = useTransform(scrollYProgressCardsContainer, [0, 1], [window.innerHeight*-0.1, 1]);
  const scaleProgressCard1Container = useTransform(scrollYProgressCardsContainer, [0, 1], [0.8, 1]);
  const opacityProgressCard1Container = useTransform(scrollYProgressCardsContainer, [0, 1], [0, 1]);
  const y1Card2Container = useTransform(scrollYProgressCardsContainer, [0, 1], [window.innerHeight*0.2, 1]);
  const scaleProgressCard2Container = useTransform(scrollYProgressCardsContainer, [0, 1], [0.4, 1]);
  const opacityProgressCard2Container = useTransform(scrollYProgressCardsContainer, [0, 1], [0, 1]);

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
        <div ref={cardsContainer} className={classes['small-card-items']}>
          <motion.div className={classes['individual-item']}
                      style={{opacity: opacityProgressCard1Container, y: y1Card1Container, scale: scaleProgressCard1Container}}
          >
            <Link to='' onClick={()=>{
              setMainCardItem({
                cardImage: Project1,
                cardLink: '/project-1'
              })
            }}>
              <img className={classes['small-img']} src={Project1} alt="project 1 small preview" id='img-1' />
            </Link> 
            <h4>e-commerce app</h4>
          </motion.div>
          <motion.div className={classes['individual-item']}
                      style={{opacity: opacityProgressCard2Container, y: y1Card2Container, scale: scaleProgressCard2Container}}
          >
            <Link to='' onClick={()=>{
              setMainCardItem({
                cardImage: Project2,
                cardLink: '/project-2'
              })
            }}>
              <img className={classes['small-img']} src={Project2} alt="project 2 small preview" id='img-2' />
            </Link> 
            <h4>landing page of a restaurant</h4>
          </motion.div>
        </div>
        <div className={classes['main-card']}>
          <Card image={mainCardItem.cardImage} link={mainCardItem.cardLink} />
        </div>
      </div>
      
    </div>
  );
}

export default forwardRef(Projects);