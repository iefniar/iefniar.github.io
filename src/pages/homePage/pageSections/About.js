import { forwardRef, useRef } from "react";
import classes from './About.module.css';
import MongoDBIcon from '../../../icons/devicon_mongodb.svg';
import ReactIcon from '../../../icons/devicon_react.svg';
import ExpressIcon from '../../../icons/devicon_express.svg';
import NodejsIcon from '../../../icons/vscode-icons_file-type-node.svg';
import { useTransform, useScroll, motion } from 'framer-motion';

const About = (props, ref) => {
  const iconsContainer = useRef(null);
  const { scrollYProgress: scrollYProgressIconsContainer } = useScroll({
      target: iconsContainer,
      offset: ["1.33 1.33", "1 1"]
  });

  const scaleProgressIconsContainer = useTransform(scrollYProgressIconsContainer, [0, 1], [0.9, 1]);
  const opacityProgressIconsContainer = useTransform(scrollYProgressIconsContainer, [0, 1], [0.8, 1]);

  return (
    <div className={classes['about-me-container']} ref={ref}> 
      <div className={`${classes['align-right']} ${classes['first-text']}`}>
        <div className={classes['text-type-2']}>hi, i'm</div>
        <div className={`${classes['text-type-2']} ${classes['text-2']}`}>Jeffrey</div>
      </div>
      <div className={classes['align-right']}>
        <div className={`${classes['text-type-1']} ${classes['text-3']}`}>a web developer</div>
      </div>
      <div className={`${classes['text-type-1']} ${classes['text-4']}`}>with experience in the</div>
      <div className={classes['align-right']}>
        <div className={`${classes['text-type-2']} ${classes['text-5']}`}>Mern</div>
        <div className={classes['text-type-1']}>stack</div>
      </div>
      <div ref={iconsContainer} className={classes['icons-area']}>
        <motion.div className={classes['first-group']}
                    style={{opacity: opacityProgressIconsContainer, y: scrollYProgressIconsContainer, scale: scaleProgressIconsContainer}}
        >
          <img src={MongoDBIcon} alt="MongoDB icon" />
          <h4>MongoDB</h4>
          <img src={ReactIcon} alt="React.js icon" />
          <h4>React.js</h4>
        </motion.div>
        <div className={classes['second-group']}>
          <img src={ExpressIcon} alt="Express.js icon" />
          <h4>Express.js</h4>
          <img src={NodejsIcon} alt="Node.js icon" />
          <h4>Node.js</h4>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(About);