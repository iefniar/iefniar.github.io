import classes from './TravelHomePage.module.css';
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransform, useScroll, motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import gsap from 'gsap';
import About from './pageSections/About';
import Destinations from './pageSections/Destinations';

const TravelHomePage = () => {
  const aboutRef = useRef(null);
  const destinationsRef = useRef(null);
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
    .from('#imgOverlay', 
      { y: '0',
        ease: 'power1.inOut',
      }
    )
    .from('#travelImg', 
      { opacity: 0, 
        scale: 2,
        duration: 3
      }
    )
    .fromTo('#navBtn', 
      { opacity: 0,
        y: '-100'
      },
      { opacity: 1,
        y: '0',
        stagger: .4}, 
      3
    )
    .fromTo('#navDiv', 
      { opacity: 0,
        scale: .5,
        y: '-100'
      },
      { opacity: 1,
        scale: 1,
        y: '0',
        ease: 'elastic.out',
        duration: 2
      }
    )
    .from('#textLeft', 
      { opacity: 0,
        scale: .5,
        x: '-100'}, 
        2
    )
    .from('#textRight', 
      { opacity: 0,
        scale: .5,
        y: '100vh',
        ease: 'power4'},
        '<1'
    )
    .fromTo('#travelAboutSection', 
      { opacity: 0
      },
      { opacity: 1
      },
      4
    )
    
      
  }, []);


  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate('/');
  }

  const aboutClickHandler = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const destinationsClickHandler = () => {
    destinationsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const reviewsClickHandler = () => {

  }

  return (
    <div className={classes['main-container']}>
      <div layout  className={classes['travel-hero-section']} id='travelHeroSection' >
        <div className={classes['nav-container']} id='navContainer'>
          <div className={classes['nav-left']}>
            <button className={classes['nav-btn']} id='navBtn' onClick={goHomeHandler}>
              <h4>Home</h4>
            </button>
            <button className={classes['nav-btn']} id='navBtn' onClick={aboutClickHandler}>
              <h4>About</h4>
            </button>
          </div>
          <div className={classes['nav-center']}>
            <div className={classes['nav-div']} id='navDiv'>
              <h4>Aujourd'hui Journeys</h4>
            </div>
          </div>
          <div className={classes['nav-right']}>
            <button className={classes['nav-btn']} id='navBtn' onClick={destinationsClickHandler}>
              <h4>Destinations</h4>
            </button>
            <button className={classes['nav-btn']} id='navBtn' onClick={reviewsClickHandler}>
              <h4>Reviews</h4>
            </button>
          </div>
        </div>
        <div className={classes['hero-text']}>
          <div className={classes['text-left']} id='textLeft'>
            <motion.h1 style={{
            backgroundImage
          }}>
            Begin your journey today
            </motion.h1>
          </div>
          <div className={classes['text-right']} id='textRight'>
            <h3>Aujourd'hui, le monde vous attend</h3>
          </div>
        </div>
        <div className={classes['img-container']}>
          <div className={classes['img-overlay']} id='imgOverlay' />
          <img src='/optimized-images/travel/webp/landscape-8.webp' alt='vacation destination' className={classes['travel-img']} id='travelImg' />
        </div>
      </div>   
      <div className={classes['travel-about-section']} id='travelAboutSection'>
        <About ref={aboutRef} />
      </div>  
      <div className={classes['travel-destinations-section']} id='travelDestinationsSection'>
        <Destinations ref={destinationsRef} />
      </div> 
    </div>
);
}

export default TravelHomePage;