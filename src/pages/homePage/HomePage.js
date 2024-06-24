import classes from './HomePage.module.css';
import { useRef, useEffect  } from 'react';
import Hero from './pageSections/Hero';
import About from './pageSections/About';
import Projects from './pageSections/Projects';
import Contact from './pageSections/Contact';
import Logo from '../../icons/Logo.svg';
import Button from '../../components/Button';
import Lenis from '@studio-freight/lenis';
import { useTransform, useScroll, motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';

const HomePage = () => {
  const COLORS = ["#042c62", "#2d6ec7", "#437CAF"];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #010b19 0%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    });
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  }, []);
  

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleClickAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const mainContainer = useRef(null);
  const { scrollYProgress: scrollYProgressMainContainer } = useScroll({
      target: mainContainer,
      offset: ['start end', 'end start']
  });

  const y1MainContainer = useTransform(scrollYProgressMainContainer, [0, 1], [0, window.innerHeight]);
  const y2MainContainer = useTransform(scrollYProgressMainContainer, [0, 1], [0, window.innerHeight*1.01]);
  const y3MainContainer = useTransform(scrollYProgressMainContainer, [0, 1], [0, window.innerHeight*1.1]);
  const y4MainContainer = useTransform(scrollYProgressMainContainer, [0, 1], [0, window.innerHeight*(-1)]);
  
  const aboutContainer = useRef(null);
  const { scrollYProgress: scrollYProgressAboutContainer } = useScroll({
      target: aboutContainer,
      offset: ["0 1", "0.33 1"]
  });

  const y1AboutContainer = useTransform(scrollYProgressAboutContainer, [0, 1], [0, window.innerHeight*1.01]);
  const scaleProgressAboutContainer = useTransform(scrollYProgressAboutContainer, [0, 1], [0.8, 1]);
  const opacityProgressAboutContainer = useTransform(scrollYProgressAboutContainer, [0, 1], [0.5, 1]);

  const projectsContainer = useRef(null);
  const { scrollYProgress: scrollYProgressProjectsContainer } = useScroll({
      target: projectsContainer,
      offset: ["0 1", "0.33 1"]
  });

  const scaleProgressProjectsContainer = useTransform(scrollYProgressProjectsContainer, [0, 1], [0.9, 1]);
  const opacityProgressProjectsContainer = useTransform(scrollYProgressProjectsContainer, [0, 1], [0.4, 1]);

  const contactContainer = useRef(null);
  const { scrollYProgress: scrollYProgressContactContainer } = useScroll({
      target: contactContainer,
      offset: ["0 1", "0.33 1"]
  });

  const scaleProgressContactContainer = useTransform(scrollYProgressContactContainer, [0, 1], [0.9, 1]);
  const opacityProgressContactContainer = useTransform(scrollYProgressContactContainer, [0, 1], [0.7, 1]);

  return (
    <motion.div ref={mainContainer} className={classes['homePage-container']}
    style={{
      backgroundImage
    }}
    >
      <motion.div className={classes['navBar-container']}
        initial={{
          scale: 1.1,
          opacity: 0,
        }}
        animate={{
          scale: 1.0,
          opacity: 1,
          transition: {
              duration: 1,
              delay: 1
          }
        }}
      >
        <div className={classes['navBar-left']} />
        <div className={classes['navBar-right']}>
          <div className={classes['navBar-container-links']}>
            <button className={classes['navBar-btn']} onClick={handleClickAbout}>
              <h4>About</h4>
            </button>
          </div>
          <div className={classes['navBar-container-links']}>
            <button className={classes['navBar-btn']} onClick={handleClickProjects}>
              <h4>Projects</h4>
            </button>
          </div>
          <div className={classes['navBar-container-links']}>
            <button className={classes['navBar-btn']} onClick={handleClickContact}>
              <h4>Contact</h4>
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div className={classes['hero-section']}
        initial={{
          scale: 1.1,
          opacity: 0,
        }}
        animate={{
          scale: 1.0,
          opacity: 1,
          transition: {
              duration: 1,
              delay: 2
          }
        }}
      >
        <Hero/>
      </motion.div>
      <motion.div className={classes['call-to-action-area']}
        initial={{
          scaleX: 0.8,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          scaleX: 1.0,
          transition: {
            duration: 2,
            delay: 1
          }
        }}
      >
        <div className={classes['button-area']}>
          <Button text="get started" onClick={handleClickProjects} />
        </div>
        <div className={classes['cta-text-area']}>
          Craft a user experience that converts
        </div>
      </motion.div>
      <div className={classes['about-projects-container']}>
        <div ref={aboutContainer}>
          <motion.div className={classes['about-section']}
                      style={{opacity: opacityProgressAboutContainer, y: scrollYProgressAboutContainer, scale: scaleProgressAboutContainer}}
          >
            <About ref={aboutRef}/>
          </motion.div>
        </div>
        <div ref={projectsContainer}>
          <motion.div className={classes['projects-section']}
            style={{y: scrollYProgressProjectsContainer, scale: scaleProgressProjectsContainer}}
          >
            <Projects ref={projectsRef} />
          </motion.div>
        </div>
      </div>
      <div ref={contactContainer}>
        <motion.div className={classes['contact-section']}
          style={{opacity: opacityProgressContactContainer, y: scrollYProgressContactContainer, scale: scaleProgressContactContainer}}
        >
          <Contact ref={contactRef} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HomePage;