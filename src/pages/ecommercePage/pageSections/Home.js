import classes from './Home.module.css';
import { useRef, useEffect, useState } from 'react';
import CategoriesCard from '../../../components/CategoriesCard';
import ECommerceButton from '../../../components/ECommerceButton';
import { ArrowDropDownOutlined } from '@mui/icons-material';
//import gsap from 'gsap';
//import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTransform, useScroll, motion, useAnimate, useInView, animate, useMotionValue, useMotionTemplate } from 'framer-motion';
import useOrientation from '../../../hooks/use-orientation';

import Canvas from './Canvas';

const Home = () => {
  const COLORS = ["#198AFC", "#0364d4", "#e4effa"];
  const color = useMotionValue(COLORS[0]);
  //const backgroundImage = useMotionTemplate`linear-gradient(to bottom, ${color}, #198AFC, #198AFC)`;
  const deviceOrientation = useOrientation();
  const [videoPath, setVideoPath] = useState('/optimized-images/ecommerce/models/women/videos/landscape/compressed/ecommerce-landscape-video-1080p-25fps-90-percent-reduction-compressed.mp4');

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    });

  }, []);

  useEffect(() => {
    if(deviceOrientation === 'portrait'){
      setVideoPath('/optimized-images/ecommerce/models/women/videos/portrait/compressed/ecommerce-portrait-video-1080p-25fps-90-percent-reduction-compressed.mp4');
    }
    else if(deviceOrientation === 'landscape'){
      setVideoPath('/optimized-images/ecommerce/models/women/videos/landscape/compressed/ecommerce-landscape-video-1080p-25fps-90-percent-reduction-compressed.mp4');
    }

  }, [deviceOrientation]);

  const middleBottomSectionContainer = useRef(null);
  const { scrollYProgress: scrollYProgressMiddleBottomSectionContainer } = useScroll({
      target: middleBottomSectionContainer,
      offset: ["1.33 1.33", "1 1"]
  });

  const x1Child1MiddleBottomSectionContainer = useTransform(scrollYProgressMiddleBottomSectionContainer, [0, 1], [window.innerHeight*-0.8, 1]);
  const scaleProgressChild1MiddleBottomSectionContainer = useTransform(scrollYProgressMiddleBottomSectionContainer, [0, 1], [0.8, 1]);
  const opacityProgressChild1MiddleBottomSectionContainer = useTransform(scrollYProgressMiddleBottomSectionContainer, [0, 1], [0, 1]);  
  const y1Child2MiddleBottomSectionContainer = useTransform(scrollYProgressMiddleBottomSectionContainer, [0, 1], [window.innerHeight*0.8, 1]);
  const scaleProgressChild2MiddleBottomSectionContainer = useTransform(scrollYProgressMiddleBottomSectionContainer, [0, 1], [0.8, 1]);
  const opacityProgressChild2MiddleBottomSectionContainer = useTransform(scrollYProgressMiddleBottomSectionContainer, [0, 1], [0, 1]);  

  const [middleSectionTextsContainerScope, middleSectionTextsAnimate] = useAnimate();
  const middleSectionTextsContainerIsInView = useInView(middleSectionTextsContainerScope);

  useEffect(() => {
    const animationSequenceFn = async () => {
      if (middleSectionTextsContainerIsInView) {
        await middleSectionTextsAnimate("#middle-section-text-1", {
          opacity: 1, 
          scale: 1 
        }, { 
          duration: 0.3,
          delay: 0.2 
        });      
        await middleSectionTextsAnimate("#middle-section-text-2", {
          opacity: 1, 
          scale: 1 
        }, { 
          duration: 0.3,
          delay: 0.2 
        });      
        await middleSectionTextsAnimate("#middle-section-arrow", {
          opacity: 1, 
          scale: 1 
        }, { 
          duration: 0.3,
          delay: 0.2 
        });      
      }
      else{
        await middleSectionTextsAnimate("#middle-section-text-1", {
          opacity: 0, 
          scale: 0.5 
        }, { 
          duration: 0.3 
        });  
        await middleSectionTextsAnimate("#middle-section-text-2", {
          opacity: 0, 
          scale: 0.5 
        }, { 
          duration: 0.3 
        });  
        await middleSectionTextsAnimate("#middle-section-arrow", {
          opacity: 0, 
          scale: 0.5 
        }, { 
          duration: 0.3 
        });  
      }
    };

    animationSequenceFn();
    
  }, [middleSectionTextsContainerIsInView]);
  
  const [cardsScope, animate] = useAnimate();
  const isInView = useInView(cardsScope);
  
  useEffect(() => {
    const animationSequenceFn = async () => {
      if (isInView) {
        await animate("#card-1", { y: '-3rem', opacity: 1 }, { duration: 0.3 });
        await animate("#card-2", { y: '-3rem', opacity: 1 }, { duration: 0.3 });
        await animate("#card-3", { y: '-3rem', opacity: 1 }, { duration: 0.3 });
        await animate("#card-4", { y: '-3rem', opacity: 1 }, { duration: 0.3 });
        await animate("#card-6", { y: '-3rem', opacity: 1 }, { duration: 0.3 });
        await animate("#card-5", { y: '-3rem', opacity: 1 }, { duration: 0.3 });
      }
      else{
        await animate("#card-1", { y: '3rem', opacity: 0 }, { duration: 0 });
        await animate("#card-2", { y: '3rem', opacity: 0 }, { duration: 0 });
        await animate("#card-3", { y: '3rem', opacity: 0 }, { duration: 0 });
        await animate("#card-4", { y: '3rem', opacity: 0 }, { duration: 0 });
        await animate("#card-5", { y: '3rem', opacity: 0 }, { duration: 0 });
        await animate("#card-6", { y: '3rem', opacity: 0 }, { duration: 0 });
      }
    };

    animationSequenceFn();
     
  }, [isInView]);

/*  
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
          setInterval(() => {
            gsapVideo.currentTime = tl.scrollTrigger.progress.toFixed(3)*4;
          }, 33.3);
        },
      }
    });
  }, []);
  //gsap code end
*/

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
                delay: 0
            }
        }}>
            <motion.div className={classes['hero-text']}
            initial={{
              opacity: 0,
              letterSpacing: '.4rem'
            }}
            animate={{
              opacity: 1,
              letterSpacing: '.1rem',
              transition: {
                  duration: 1,
                  delay: 1
              }
            }}>
              <div className={classes['hero-left']}>
                <h1>Confidence Starts <br></br> 
                  <motion.span style={{
                    backgroundColor: color
                    }}>
                    Here
                  </motion.span>
                </h1>
                <h3>Shop Pre-Curated Outfits & Look Amazing!</h3>
                <div>
                  <ECommerceButton text='Explore' path='/project-1/items' />
                </div>
              </div>
              <div className={classes['hero-right']} />
            </motion.div>
        </motion.div>
        <div className={classes['middle-section']} ref={middleSectionTextsContainerScope}>
          <h2 id='middle-section-text-1'>
            Score Up to <span>50% Off</span> on Your New Favorite Pieces!
          </h2>
          <h2 id='middle-section-text-2'>
            Free Shipping & Easy Returns: Shop <span>Risk-Free</span>
          </h2>
          <span id='middle-section-arrow'><ArrowDropDownOutlined /></span>
        </div>
        <Canvas />
        {/*
        <div className={classes['video-section']} id='videoSection'>
          
          <video ref={gsapVideoRef} src={videoPath} preload='auto' playsInline muted />
          
          
          <div className={classes['scroll-down-container']}>
            <div className={classes['scroll-down-inner-container']}>
              <div className={classes['scroll-down']} />
              <h4>Scroll <br></br> <span>Down</span></h4>
            </div>   
          </div>
        </div>
        */}
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
        <div className={classes['cards-section']} ref={cardsScope}>
          <div className={classes['cards-group']}>
            <CategoriesCard id='card-1' imagePath='/optimized-images/ecommerce/models/women/woman-16.webp' headline='Fresh Arrivals' btnText='Shop Now' btnPath='/project-1/items' />
            <CategoriesCard id='card-2' imagePath='/optimized-images/ecommerce/models/both/both-1.webp' headline='Style Inspiration' btnText='Shop Now' btnPath='/project-1/items' />
            <CategoriesCard id='card-3' imagePath='/optimized-images/ecommerce/models/women/woman-17.webp' headline='Luxe Lounge' btnText='Shop Now' btnPath='/project-1/items' />
          </div>
          <div className={classes['cards-group']}>
            <CategoriesCard id='card-4' imagePath='/optimized-images/ecommerce/models/men/man-13.webp' headline='Winter Warmers' btnText='Shop Now' btnPath='/project-1/items' />
            <CategoriesCard id='card-5' imagePath='/optimized-images/ecommerce/models/women/women-2.webp' headline='Fall Essentials' btnText='Shop Now' btnPath='/project-1/items' />
            <CategoriesCard id='card-6' imagePath='/optimized-images/ecommerce/models/women/woman-15.webp' headline='Summer Ready' btnText='Shop Now' btnPath='/project-1/items' />
          </div>
        </div>
    </div>
  );
}

export default Home;
