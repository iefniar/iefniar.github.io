import classes from './HomePage.module.css';
import { useRef } from 'react';
import Hero from './pageSections/Hero';
import About from './pageSections/About';
import Projects from './pageSections/Projects';
import Contact from './pageSections/Contact';
import Logo from '../../icons/Logo.svg';
import Button from '../../components/Button';

const HomePage = () => {
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
  
  return (
    <div className={classes['homePage-container']}>
      <div className={classes['navBar-container']}>
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
          <div className={classes['navBar-container-links']}>
            <button className={classes['navBar-btn']} >
              <img src={Logo} alt="logo" />
            </button>
          </div>
        </div>
      </div>
      <div className={classes['hero-section']}>
        <Hero/>
      </div>
      <div className={classes['call-to-action-area']}>
        <div className={classes['button-area']}>
          <Button text="get started" />
        </div>
        <div className={classes['cta-text-area']}>
          Craft a user experience that converts
        </div>
      </div>
      <div className={classes['about-section']}>
        <About ref={aboutRef}/>
      </div>
      <div className={classes['projects-section']}>
        <Projects ref={projectsRef} />
      </div>
      <div className={classes['contact-section']}>
        <Contact ref={contactRef} />
      </div>
    </div>
  );
}

export default HomePage;