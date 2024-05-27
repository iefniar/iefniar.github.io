import classes from './Home.module.css';
import { useRef, useEffect } from 'react';
import CategoriesCard from '../../../components/CategoriesCard';
import ECommerceButton from '../../../components/ECommerceButton';
import { ArrowCircleDownOutlined, ArrowDropDownOutlined } from '@mui/icons-material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTransform, useScroll, motion } from 'framer-motion';

const Home = () => {
  const middleSectionContainer = useRef(null);
  const middleBottomSectionContainer = useRef(null);
  const { scrollYProgress: scrollYProgressMiddleSectionContainer } = useScroll({
      target: middleSectionContainer,
      offset: ["1.33 1.33", "1 1"]
  });
  const { scrollYProgress: scrollYProgressMiddleBottomSectionContainer } = useScroll({
      target: middleBottomSectionContainer,
      offset: ["1.33 1.33", "1 1"]
  });

  const x1Child1MiddleSectionContainer = useTransform(scrollYProgressMiddleSectionContainer, [0, 1], [window.innerHeight*-0.5, 1]);
  const scaleProgressChild1MiddleSectionContainer = useTransform(scrollYProgressMiddleSectionContainer, [0, 1], [0.8, 1]);
  const opacityProgressChild1MiddleSectionContainer = useTransform(scrollYProgressMiddleSectionContainer, [0, 1], [0, 1]);  
  const x1Child2MiddleSectionContainer = useTransform(scrollYProgressMiddleSectionContainer, [0, 1], [window.innerHeight*-0.9, 1]);
  const scaleProgressChild2MiddleSectionContainer = useTransform(scrollYProgressMiddleSectionContainer, [0, 1], [0.8, 1]);
  const opacityProgressChild2MiddleSectionContainer = useTransform(scrollYProgressMiddleSectionContainer, [0, 1], [0, 1]);  
  const x1Child1MiddleBottomSectionContainer = useTransform(scrollYProgressMiddleBottomSectionContainer, [0, 1], [window.innerHeight*-0.8, 1]);
  const scaleProgressChild1MiddleBottomSectionContainer = useTransform(scrollYProgressMiddleBottomSectionContainer, [0, 1], [0.8, 1]);
  const opacityProgressChild1MiddleBottomSectionContainer = useTransform(scrollYProgressMiddleBottomSectionContainer, [0, 1], [0, 1]);  
  const y1Child2MiddleBottomSectionContainer = useTransform(scrollYProgressMiddleBottomSectionContainer, [0, 1], [window.innerHeight*0.8, 1]);
  const scaleProgressChild2MiddleBottomSectionContainer = useTransform(scrollYProgressMiddleBottomSectionContainer, [0, 1], [0.8, 1]);
  const opacityProgressChild2MiddleBottomSectionContainer = useTransform(scrollYProgressMiddleBottomSectionContainer, [0, 1], [0, 1]);  

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
        <motion.div className={classes['hero-section']} 
        initial={{
          scale: 1.1
        }}
        animate={{
            scale: 1.0,
            transition: {
                duration: 1,
                delay: 1
            }
        }}>
            <motion.div className={classes['hero-text']}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                  duration: 1,
                  delay: 2
              }
            }}>
              <div className={classes['hero-left']}>
                <h1>Confidence Starts <br></br> <span>Here</span></h1>
                <h3>Shop Pre-Curated Outfits & Look Amazing!</h3>
                <motion.div
                initial={{
                  opacity: 0,
                  transform: 'translateX(-5%)'
                }}
                animate={{
                  opacity: 1,
                  transform: 'translateX(0%)',
                  transition: {
                      duration: 1,
                      delay: 3
                  }
                }}>
                  <ECommerceButton text='Explore' path='/project-1/items' />
                </motion.div>
              </div>
              <div className={classes['hero-right']} />
            </motion.div>
        </motion.div>
        <div className={classes['middle-section']} ref={middleSectionContainer}>
          <motion.h2
          style={{opacity: opacityProgressChild1MiddleSectionContainer, 
            x: x1Child1MiddleSectionContainer, 
            scale: scaleProgressChild1MiddleSectionContainer
          }}>
            Score Up to <span>50% Off</span> on Your New Favorite Pieces!
          </motion.h2>
          <motion.h2
          style={{opacity: opacityProgressChild2MiddleSectionContainer, 
            x: x1Child2MiddleSectionContainer, 
            scale: scaleProgressChild2MiddleSectionContainer
          }}>
            Free Shipping & Easy Returns: Shop <span>Risk-Free</span>
          </motion.h2>
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
        <div className={classes['middle-bottom-section']} ref={middleBottomSectionContainer}>
          <motion.h2
          style={{opacity: opacityProgressChild1MiddleBottomSectionContainer, 
            x: x1Child1MiddleBottomSectionContainer, 
            scale: scaleProgressChild1MiddleBottomSectionContainer
          }}>
            Dress To <span>Impress</span>
          </motion.h2>
          <motion.h4
          style={{opacity: opacityProgressChild2MiddleBottomSectionContainer, 
            y: y1Child2MiddleBottomSectionContainer, 
            scale: scaleProgressChild2MiddleBottomSectionContainer
          }}>
            Shop Now, Wear Now
          </motion.h4>
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
