import classes from './About.module.css';
import { forwardRef, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = (props, ref) => {
    const containerRef = useRef(null);
    const [yImg1, setYImg1] = useState(0);
    const [yImg2, setYImg2] = useState(0);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            let tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top center',
                    end: 'bottom bottom',
                    scrub: true,
                    onUpdate: (self) => {
                        setYImg1(self.progress*10);
                        setYImg2(self.progress*30);
                    }
                }
            });
            tl
            .from('#firstImage', 
                {
                  opacity: 0, 
                },
                .5
            )
            .from('#secondImage', 
                {
                  opacity: 0,
                },
                '<.5'
            )
            .from('#h2Why', 
                {
                  opacity: 0,
                  y: '50px'
                },
                0
            )
            .from('#paragraph', 
                {
                  opacity: 0,
                  y: '50px',
                  stagger: .5
                },
                '<'
            )
        });

        return () => ctx.revert();
    }, []);

  return (
    <div className={classes['main-container']} ref={ref} >
        <div className={classes['inner-container']} ref={containerRef}>
            <div className={classes['left-content']}>
                <img src='/optimized-images/travel/webp/portrait-4.webp' alt='vacation destination' className={classes['first-image']} id='firstImage' style={{ transform: `translateY(-${yImg1}px)` }} />
                <img src='/optimized-images/travel/webp/portrait-5.webp' alt='vacation destination' className={classes['second-image']} id='secondImage' style={{ transform: `translateY(-${yImg2}px)` }} />
            </div>
            <div className={classes['right-content']}>
                <h2 id='h2Why'>Why Aujourd'hui Journeys</h2>
                <p id='paragraph'>
                    At Aujourd'hui Journeys, we are passionate about crafting exceptional travel experiences that transform your aspirations into reality. Our team of expert travel designers possesses unparalleled knowledge and dedication to exceeding your expectations.
                </p>
                <p id='paragraph'>
                    We understand that every traveler is unique. Through a collaborative approach, we meticulously curate personalized itineraries that align with your specific interests, budget, and travel style. Whether you seek tranquility on a secluded beach, exhilarating adventure in breathtaking landscapes, or an immersive exploration of vibrant cultures, our meticulous planning ensures a seamless and unforgettable journey.
                </p>
                <p id='paragraph'>
                    Don't delay the adventure you deserve. Explore our curated destinations for inspiration, or connect with our travel designers to co-create your dream vacation. The world awaits your discovery - let Aujourd'hui Journeys be your trusted guide. 
                </p>
            </div>
        </div>  
    </div>
  )
}

export default forwardRef(About);