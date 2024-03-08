import classes from './HomePage.module.css';
import { useRef } from 'react';
import About from './pageSections/About';
import Profile from './pageSections/Profile';
import Contact from './pageSections/Contact';

const HomePage = () => {
  const aboutRef = useRef(null);
  const profileRef = useRef(null);
  const contactRef = useRef(null);

  const handleClickAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickProfile = () => {
    profileRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <div className={classes['navBar-container']}>
        <div className={classes['navBar-container-links']}>
          <button className={classes['navBar-btn']} onClick={handleClickAbout}>
            <h4>About</h4>
          </button>
        </div>
        <div className={classes['navBar-container-links']}>
          <button className={classes['navBar-btn']} onClick={handleClickProfile}>
            <h4>Profile</h4>
          </button>
        </div>
        <div className={classes['navBar-container-links']}>
          <button className={classes['navBar-btn']} onClick={handleClickContact}>
            <h4>Contact</h4>
          </button>
        </div>
      </div>

      <section className={classes['hero-section']}>
        <About ref={aboutRef}/>
      </section>
      
      <Profile ref={profileRef} />
      <Contact ref={contactRef} />  
      
      
    </>
  );
}

export default HomePage;