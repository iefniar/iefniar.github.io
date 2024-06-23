import classes from './Home.module.css';
import { useRef, useEffect, useState } from 'react';
import CategoriesCard from '../../../components/CategoriesCard';
import ECommerceButton from '../../../components/ECommerceButton';
import { ArrowDropDownOutlined } from '@mui/icons-material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTransform, useScroll, motion, useAnimate, useInView } from 'framer-motion';
import useOrientation from '../../../hooks/use-orientation';
import Canvas from './Canvas';

const Home = () => {
  const deviceOrientation = useOrientation();
  const [videoPath, setVideoPath] = useState('/optimized-images/ecommerce/models/women/videos/landscape/compressed/ecommerce-landscape-video-1080p-25fps-90-percent-reduction-compressed.mp4');

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { duration: 1 }});
    timeline
    .fromTo('#heroSection', 
      { scale: 1.1,
        opacity: 0
      },
      { scale: 1.0,
        opacity: 1,
        ease: 'back.in',
        delay: 3,
        duration: 2
      }
    )
    .from('#heroH1', 
      {
        y: '-100vh',
        opacity: 0,
        ease: 'back.in'
      },
      '<2'
    )
    .from('#heroSpan', 
      {
        y: '100vh',
        opacity: 0,
        stagger: .3,
        ease: 'back'
      },
      '<'
    )
    .from('#heroH3', 
      {
        x: '-100vw',
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'bounce.in'
      },
      '<1'
    )
    .from('#heroButton', 
      {
        x: '-100vw',
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'back.in'
      },
      '<1'
    )

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
        await middleSectionTextsAnimate("#verticalLineTop", {
          opacity: 1, 
          scale: 1 
        }, { 
          duration: 1,
          delay: 0.5 
        });      
        await middleSectionTextsAnimate("#smallText", {
          opacity: 1, 
          y: 0 
        }, { 
          duration: 0.5,
          delay: 0.2 
        });      
        await middleSectionTextsAnimate("#largeText", {
          opacity: 1, 
          y: 0 
        }, { 
          duration: 0.5,
          delay: 0.2 
        });      
        await middleSectionTextsAnimate("#paragraphSection", {
          opacity: 1, 
          y: 0 
        }, { 
          duration: 0.5,
          delay: 0.5 
        });      
        await middleSectionTextsAnimate("#verticalLineBottom", {
          opacity: 1, 
          scale: 1 
        }, { 
          duration: 0.5,
          delay: 1 
        });      
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
      }
      else{
        await middleSectionTextsAnimate("#verticalLineTop", {
          opacity: 0, 
          scale: 0 
        }, { 
          duration: 0.3 
        });  
        await middleSectionTextsAnimate("#smallText", {
          opacity: 0, 
          y: 10 
        }, { 
          duration: 0.3 
        });  
        await middleSectionTextsAnimate("#largeText", {
          opacity: 0, 
          y: -10 
        }, { 
          duration: 0.3 
        });  
        await middleSectionTextsAnimate("#paragraphSection", {
          opacity: 0, 
          y: -10 
        }, { 
          duration: 0.3 
        });  
        await middleSectionTextsAnimate("#verticalLineBottom", {
          opacity: 0, 
          scale: 0 
        }, { 
          duration: 0.3 
        });  
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
        <div className={classes['hero-section']} id='heroSection'>
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
                <h1 id='heroH1'>Confidence Starts </h1>
                <div className={classes['hero-span']}>
                  <span id='heroSpan'>H</span>
                  <span id='heroSpan'>e</span>
                  <span id='heroSpan'>r</span>
                  <span id='heroSpan'>e</span>
                </div>
                <h3 id='heroH3'>Shop Pre-Curated Outfits & Look Amazing!</h3>
                <div id='heroButton'>
                  <ECommerceButton text='Explore' path='/project-1/items' />
                </div>
              </div>
              <div className={classes['hero-right']} />
            </motion.div>
        </div>
        <div className={classes['middle-section']} ref={middleSectionTextsContainerScope}>
          <div className={classes['in-between']}>
            <div className={classes['vertical-line-top']} id='verticalLineTop' />
            <div className={classes['small-text']} id='smallText'>
                discover
            </div>
            <div className={classes['large-text']} id='largeText'>
              Who are we?
            </div>
          </div>
          <div className={classes['paragraph-section']} id='paragraphSection'>
            <p>
             <span>Canvas, Cobalt & Co.</span> isn't your average clothing store. We're a brand built on the belief that clothing is a powerful tool for transformation. Since 2018, we've curated a collection of modern pieces designed for those who crave a balance between sophisticated style and effortless cool. We champion timeless designs with a modern twist, featuring clean lines that flatter any figure and statement details that let your personality shine.
            </p>
            <p>
            Break free from the fashion mainstream and discover a wardrobe that reflects your individuality. At Canvas, Cobalt & Co., we believe in unleashing your inner artist.  We don't just sell clothes, we offer a platform for self-expression. Browse our collection and discover timeless pieces that will become the foundation of your modern wardrobe - paint your own canvas today and express your unique voice with every outfit.
            </p>
          </div>
          <div className={classes['vertical-line-bottom']} id='verticalLineBottom' />
          <h2 id='middle-section-text-1'>
            Score Up to <span>50% Off</span> on Your New Favorite Pieces
          </h2>
          <h2 id='middle-section-text-2'>
            Free Shipping & Easy Returns: Shop <span>Risk-Free</span>
          </h2>
        </div>
        <div className={classes['canvas-section']}>
          <Canvas />
        </div>
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
