import classes from './TravelHomePage.module.css';
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransform, useScroll, motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import gsap from 'gsap';

const TravelHomePage = () => {
  const COLORS = ["#851212", "#da0b2d", "#0178ff"];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`linear-gradient(to bottom right, #2e033b, #000552, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    });

    const timeline = gsap.timeline({ defaults: { duration: 1 }});
    timeline
    .from('#travelImg', 
      { opacity: 0, 
        scale: 3,
        duration: 3
      })

      
  }, []);


  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate('/');
  }

  const aboutClickHandler = () => {
    
  }

  const destinationsClickHandler = () => {

  }

  const reviewsClickHandler = () => {

  }

  return (
    <div className={classes['main-container']}>
      <div layout  className={classes['travel-hero-section']} id='travelHeroSection' >
        <div className={classes['nav-container']}>
          <div className={classes['nav-left']}>
            <button className={classes['nav-btn']} onClick={goHomeHandler}>
              <h4>Home</h4>
            </button>
            <button className={classes['nav-btn']} onClick={aboutClickHandler}>
              <h4>About</h4>
            </button>
          </div>
          <div className={classes['nav-center']}>
            <div className={classes['nav-div']}>
              <h4>Travel Agency Name</h4>
            </div>
          </div>
          <div className={classes['nav-right']}>
            <button className={classes['nav-btn']} onClick={destinationsClickHandler}>
              <h4>Destinations</h4>
            </button>
            <button className={classes['nav-btn']} onClick={reviewsClickHandler}>
              <h4>Reviews</h4>
            </button>
          </div>
        </div>
        <div className={classes['hero-text']}>
          <div className={classes['text-left']}>
            <motion.h1 style={{
            backgroundImage
          }}>
            The travels of your dreams
            </motion.h1>
          </div>
          <div className={classes['text-right']}>
            <h3>The travels of your dreams</h3>
          </div>
        </div>
        <img src='/optimized-images/travel/webp/landscape-6.webp' alt='vacation destination' className={classes['travel-img']} id='travelImg' />

      </div>
      
      
      
    </div>
);
}

export default TravelHomePage;