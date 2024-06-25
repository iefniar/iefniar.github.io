import { forwardRef, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/Card';
import classes from './Projects.module.css';
import { useTransform, useScroll, motion } from 'framer-motion';
import { FolderOutlined } from '@mui/icons-material';

const Projects = (props, ref) => {
  const mainCardRef = useRef(null);
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
    cardImage: '/optimized-images/project-1.webp',
    cardLink: '/project-1'
  });

  const scrollIntoMainCardHandler = () => {
    mainCardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
                cardImage: '/optimized-images/project-1.webp',
                cardLink: '/project-1'
              });

              scrollIntoMainCardHandler();
            }}>
              <div className={classes['card-overlay']}>
                <h4>ecommerce |<span> frontend development</span></h4>
                <p>E-commerce platform for a clothing brand</p>
                <div className={classes['stack-used']}>
                  <div>
                    React.js
                  </div>
                  <div>
                    Redux
                  </div>
                  <div>
                    Gsap
                  </div>
                  <div>
                    Framer Motion
                  </div>
                </div>
                <div className={classes['card-icon']}>
                  <FolderOutlined />
                </div>
              </div>
              <img className={classes['small-img']} src='/optimized-images/project-1.webp' alt="project 1 small preview" id='img-1' />
            </Link> 
          </motion.div>
          <motion.div className={classes['individual-item']}
                      style={{opacity: opacityProgressCard2Container, y: y1Card2Container, scale: scaleProgressCard2Container}}
          >
            <Link to='' onClick={()=>{
              setMainCardItem({
                cardImage: '/optimized-images/project-2.webp',
                cardLink: '/project-2'
              });

              scrollIntoMainCardHandler();
            }}>
              <div className={classes['card-overlay']}>
                <h4>landing page |<span> frontend development</span></h4>
                <p>Landing page for a travel agency</p>
                <div className={classes['stack-used']}>
                  <div>
                    React.js
                  </div>
                  <div>
                    Gsap
                  </div>
                  <div>
                    Framer Motion
                  </div>
                </div>
                <div className={classes['card-icon']}>
                  <FolderOutlined />
                </div>
              </div>
              <img className={classes['small-img']} src='/optimized-images/project-2.webp' alt="project 2 small preview" id='img-2' />
            </Link> 
          </motion.div>
        </div>
        <div className={classes['main-card']} ref={mainCardRef}>
          <Card imagePath={mainCardItem.cardImage} link={mainCardItem.cardLink} />
        </div>
      </div>
      
    </div>
  );
}

export default forwardRef(Projects);