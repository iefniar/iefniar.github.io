import classes from './Home.module.css';
import { useRef, useEffect } from 'react';
import CategoriesCard from '../../../components/CategoriesCard';
import ECommerceButton from '../../../components/ECommerceButton';
import { ArrowCircleDownOutlined, ArrowDropDownOutlined } from '@mui/icons-material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = () => {
//gsap code start
gsap.registerPlugin(ScrollTrigger);
const gsapVideoRef = useRef(null);

useEffect(() => {
  const gsapVideo = gsapVideoRef.current;
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#videoSection",
      start: "top top",
      end: "+=3000",
      pin: true,
      scrub: 0.2,
      snap: 0.01,
      onUpdate: (self) => {
        /*console.log(
          "progress:",
          self.progress.toFixed(3),
          "direction:",
          self.direction,
          "velocity",
          self.getVelocity()
        );
        */

        setInterval(() => {
          gsapVideo.currentTime = tl.scrollTrigger.progress.toFixed(3)*7;
        }, 33.3);

      },
    }
  });
  
}, []);
//gsap code end

  return (
    <div className={classes['outer-container']}>
        <div className={classes['hero-section']}>
            <img src='/optimized-images/project-1-blue.webp' alt='ecommerce-hero-section' />
            <div className={classes['hero-text']}>
              <div className={classes['hero-left']}>
                <h1>Confidence Starts <br></br> <span>Here</span></h1>
                <h3>Shop Pre-Curated Outfits & Look Amazing!</h3>
                <ECommerceButton text='Explore' path='/project-1/items' />
              </div>
              <div className={classes['hero-right']} />
            </div>
        </div>
        <div className={classes['middle-section']}>
          <h2>Score Up to <span>50% Off</span> on Your New Favorite Pieces!</h2>
          <h2>Free Shipping & Easy Returns: Shop <span>Risk-Free</span></h2>
          <span><ArrowDropDownOutlined /></span>
        </div>
        <div className={classes['video-section']} id='videoSection'>
          <video ref={gsapVideoRef} src="/optimized-images/ecommerce/models/women/ecommerce-video.mp4" playsInline muted />
          <div className={classes['scroll-down-container']}>
            <div className={classes['scroll-down-inner-container']}>
              <div className={classes['scroll-down']} />
              <h4>Scroll <br></br> <span>Down</span></h4>
            </div>   
          </div>
        </div>
        <div className={classes['middle-bottom-section']}>
          <h2>Dress To <span>Impress</span></h2>
          <h4>Shop Now, Wear Now</h4>
        </div>
        <div className={classes['banner-ads']}>
          <h3><span>High</span> quality</h3>
          <h3>|</h3>
          <h3><span>Exclusive</span> pricing</h3>
        </div>
        <div className={classes['cards-section']}>
          <div className={classes['cards-group']}>
            <CategoriesCard imagePath='/optimized-images/ecommerce/models/women/woman-16.webp' headline='Fresh Arrivals' btnText='Shop Now' btnPath='/project-1/items' />
            <CategoriesCard imagePath='/optimized-images/ecommerce/models/both/both-1.webp' headline='Style Inspiration' btnText='Shop Now' btnPath='/project-1/items' />
            <CategoriesCard imagePath='/optimized-images/ecommerce/models/women/woman-17.webp' headline='Luxe Lounge' btnText='Shop Now' btnPath='/project-1/items' />
          </div>
          <div className={classes['cards-group']}>
            <CategoriesCard imagePath='/optimized-images/ecommerce/models/men/man-13.webp' headline='Winter Warmers' btnText='Shop Now' btnPath='/project-1/items' />
            <CategoriesCard imagePath='/optimized-images/ecommerce/models/women/women-2.webp' headline='Fall Essentials' btnText='Shop Now' btnPath='/project-1/items' />
            <CategoriesCard imagePath='/optimized-images/ecommerce/models/women/woman-15.webp' headline='Summer Ready' btnText='Shop Now' btnPath='/project-1/items' />
          </div>
        </div>
    </div>
  );
}

export default Home;
