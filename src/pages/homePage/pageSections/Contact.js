import { forwardRef, useRef } from 'react';
import classes from './Contact.module.css';
import GmailIcon from '../../../icons/basil_gmail-outline.svg';
import LinkedinIcon from '../../../icons/mingcute_linkedin-fill.svg';
import GitHubIcon from '../../../icons/ri_github-fill.svg';
import { useTransform, useScroll, motion } from 'framer-motion';

const Contact = (props, ref) => {
  const socialContainer = useRef(null);
  const { scrollYProgress: scrollYProgressSocialContainer } = useScroll({
      target: socialContainer,
      offset: ["1.33 1.33", "1 1"]
  });

  const y1Social1Container = useTransform(scrollYProgressSocialContainer, [0, 1], [window.innerHeight*-0.1, 1]);
  const scaleProgressSocial1Container = useTransform(scrollYProgressSocialContainer, [0, 1], [0.8, 1]);
  const opacityProgressSocial1Container = useTransform(scrollYProgressSocialContainer, [0, 1], [0, 1]);
  const y1Social2Container = useTransform(scrollYProgressSocialContainer, [0, 1], [window.innerHeight*-0.2, 1]);
  const scaleProgressSocial2Container = useTransform(scrollYProgressSocialContainer, [0, 1], [0.7, 1]);
  const opacityProgressSocial2Container = useTransform(scrollYProgressSocialContainer, [0, 1], [0, 1]);
  const y1Social3Container = useTransform(scrollYProgressSocialContainer, [0, 1], [window.innerHeight*0.1, 1]);
  const scaleProgressSocial3Container = useTransform(scrollYProgressSocialContainer, [0, 1], [0.8, 1]);
  const opacityProgressSocial3Container = useTransform(scrollYProgressSocialContainer, [0, 1], [0, 1]);

  const handleClick = () => {
    window.location.href = `mailto:fejeffrey.uv@gmail.com?subject=Your%20Subject%20Here&body=Your%20Pre-filled%20Email%20Body`;
  };

  return (
    <div ref={ref} className={classes['contact-container']}>
      <div className={`${classes['text-type-1']} ${classes['text-1']}`}>contact</div>
      <div className={`${classes['text-type-2']} ${classes['text-2']}`}>me</div>
      <div ref={socialContainer} className={classes['icons-group']}>
        <motion.div className={`${classes['social-icon']} ${classes['first-icon']}`}
                    style={{opacity: opacityProgressSocial1Container, y: y1Social1Container, scale: scaleProgressSocial1Container}}
        >
          <button onClick={handleClick}>
            <img src={GmailIcon} alt='gmail icon' />
            <h4>Send me an email</h4>
          </button>
        </motion.div>
        <motion.div className={`${classes['social-icon']} ${classes['second-icon']}`}
                    style={{opacity: opacityProgressSocial2Container, y: y1Social2Container, scale: scaleProgressSocial2Container}}
        >
          <a href="https://www.linkedin.com/in/jeffreyuv" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt='linkedin icon' />
            <h4>Connect with me on LI</h4>
          </a>
        </motion.div>
        <motion.div className={`${classes['social-icon']} ${classes['third-icon']}`}
                    style={{opacity: opacityProgressSocial3Container, y: y1Social3Container, scale: scaleProgressSocial3Container}}
        >
          <a href="https://github.com/iefniar" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt='github icon' />
            <h4>Find my code on GitHub</h4>
          </a>
        </motion.div>
      </div>
      <div className={`${classes['text-type-3']} ${classes['text-3']}`}>Due credit to Pexels & Pixabay. 2024</div>
    </div>
  );
}

export default forwardRef(Contact);