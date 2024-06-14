import classes from './Destinations.module.css';
import { forwardRef, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DestinationsCard from '../../../components/DestinationsCard';

const Destinations = (props, ref) => {
    const upperContainerRef = useRef(null);
    const [yImg1, setYImg1] = useState(0);
    const [yImg2, setYImg2] = useState(0);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            let tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: upperContainerRef.current,
                    start: 'top center',
                    end: 'bottom bottom',
                    onUpdate: (self) => {
                        setYImg1(self.progress*100);
                        setYImg2(self.progress*50);
                    }
                }
            });
            tl
            .fromTo('#inBetween', 
                {
                  opacity: 0, 
                  y: '-50px'
                },
                {
                  opacity: 1, 
                  y: 0
                }
            )
            .fromTo('#firstImage', 
                {
                  opacity: 0, 
                  y: '-50px'
                },
                {
                  opacity: 1, 
                  y: 0
                },
                '<1'
            )
            .fromTo('#secondImage', 
                {
                  opacity: 0,
                  y: '-50px'
                },
                {
                  opacity: 1, 
                  y: 0
                },
                '<1'
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
    <div className={classes['destinations-container']} ref={ref}>
        <div className={classes['destinations-upper-container']} ref={upperContainerRef}>
            <div className={classes['card']} id='firstImage' style={{ transform: `translateY(-${yImg1}px)` }} >
                <DestinationsCard imgPath='/optimized-images/travel/webp/portrait-3.webp' days='4' continent='America' headline='Waterfalls and beach' description='A beautiful destination to spend the holidays with your family' price='240.00' />
            </div>
            <div className={classes['in-between']} id='inBetween'>
                <div className={classes['vertical-line-top']} />
                <div className={classes['small-text']}>
                    5-star trips
                </div>
                <div className={classes['large-text']}>
                    Recommended destinations
                </div>
                <div className={classes['vertical-line-bottom']} />
            </div>
            <div className={classes['card']} id='secondImage' style={{ transform: `translateY(-${yImg2}px)` }} >
                <DestinationsCard imgPath='/optimized-images/travel/webp/portrait-6.webp' days='7' continent='Asia' headline='Delicious food' description='A beautiful destination to spend the holidays with your family' price='350.00' />
            </div>
        </div>
        <div className={classes['destinations-bottom-container']}>
            <div className={classes['sub-header']}>
                exceed your expectations
            </div>
            <div className={classes['small-horizontal-line']} />
            <div className={classes['header']}>
                Explore more destinations
            </div>
            <div className={classes['destination-group']}>
                <div className={classes['individual-group']}>
                    <div className={classes['img-container']}>
                        <img src='/optimized-images/travel/webp/landscape-1.webp' alt='vacation destination' />
                    </div>
                    <div className={classes['content-container']}>
                        <h2>
                            A beautiful destination to spend the holidays with your family
                        </h2>
                        <div className={classes['small-img-container']}>
                            <img src='/optimized-images/travel/webp/landscape-16.webp' alt='vacation destination' />
                        </div>
                        <p>
                            A beautiful destination to spend the holidays with your family. A beautiful destination to spend the holidays with your family.A beautiful destination to spend the holidays with your family.
                        </p>
                    </div>
                </div>
                <div className={classes['individual-group']}>
                    <div className={classes['img-container']}>
                        <img src='/optimized-images/travel/webp/landscape-14.webp' alt='vacation destination' />
                    </div>
                    <div className={classes['content-container']}>
                        <h2>
                            A beautiful destination to spend the holidays with your family
                        </h2>
                        <div className={classes['small-img-container']}>
                            <img src='/optimized-images/travel/webp/landscape-19.webp' alt='vacation destination' />
                        </div>
                        <p>
                            A beautiful destination to spend the holidays with your family. A beautiful destination to spend the holidays with your family.A beautiful destination to spend the holidays with your family.
                        </p>
                    </div>
                </div>
                <div className={classes['individual-group']}>
                    <div className={classes['img-container']}>
                        <img src='/optimized-images/travel/webp/landscape-4.webp' alt='vacation destination' />
                    </div>
                    <div className={classes['content-container']}>
                        <h2>
                            A beautiful destination to spend the holidays with your family
                        </h2>
                        <div className={classes['small-img-container']}>
                            <img src='/optimized-images/travel/webp/landscape-5.webp' alt='vacation destination' />
                        </div>
                        <p>
                            A beautiful destination to spend the holidays with your family. A beautiful destination to spend the holidays with your family.A beautiful destination to spend the holidays with your family.
                        </p>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  );
}

export default forwardRef(Destinations);