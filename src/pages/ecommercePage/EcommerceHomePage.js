import classes from './EcommerceHomePage.module.css';
import NavBar from './pageSections/NavBar';
import Home from './pageSections/Home';
import Footer from './pageSections/Footer';
import gsap from 'gsap';
import { useEffect } from 'react';

const EcommerceHomePage = () => {
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { duration: 2 }});
    timeline
    .to('#overlay', 
      { y: '-200vh',
        ease: 'power1.inOut',
      }
    )

  }, []);

  return (
    <div className={classes['ecommerce-container']}>
      <div className={classes['overlay']} id='overlay' />
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default EcommerceHomePage;