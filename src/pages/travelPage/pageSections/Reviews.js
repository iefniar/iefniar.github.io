import classes from './Reviews.module.css';
import { forwardRef, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reviewsItemsSliderTravelProject } from '../../../Data';
import { ArrowLeftOutlined, ArrowRightOutlined, StarSharp } from '@mui/icons-material';

const Reviews = (props, ref) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const reviewsInnerContainerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            let tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: reviewsInnerContainerRef.current,
                    start: 'top center',
                    end: 'bottom bottom'
                }
            });
            tl
            .fromTo('#customerArea', 
                {
                  opacity: 0, 
                  y: '-50px'
                },
                {
                  opacity: 1, 
                  y: 0
                }
            )
            .fromTo('#starContainer', 
                {
                  opacity: 0, 
                  x: '20px'
                },
                {
                  opacity: 1, 
                  x: 0,
                  stagger: .5
                },
                '<1'
            )
            .fromTo('#headlineArea', 
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
            .fromTo('#reviewArea', 
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
            .fromTo('#dateArea', 
                {
                  opacity: 0,
                  y: '50px'
                },
                {
                  opacity: 1, 
                  y: 0
                },
                '<1'
            )
            .fromTo('#smallHorizontalLine', 
                {
                  opacity: 0,
                  width: '0px'
                },
                {
                  opacity: 1, 
                  width: '50px'
                },
                '<1'
            )
            
        });

        return () => ctx.revert();
    }, []);


    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
        }
        else{
            setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
        }
    };

  return (
    <div className={classes['reviews-container']} ref={ref}>
        <div className={classes['reviews-inner-container']} ref={reviewsInnerContainerRef} >
            <div className={classes['slider-container']}>
                <button className={classes['arrow-left-btn']} onClick={()=>handleClick("left")}>
                    <div className={classes['arrow-left-inner-container']}>
                        <ArrowLeftOutlined />
                    </div>
                </button>
                <div className={classes['slider-wrapper']} style={{ transform: `translateX(${slideIndex * -100}%)` }} >
                    {reviewsItemsSliderTravelProject.map(item => (
                        <div className={classes['slide']} key={item.id}>
                            <div className={classes['slide-top']}>
                                <div className={classes['customer-area']} id='customerArea'>
                                    {item.customer}
                                </div>
                                <div className={classes['stars-area']}>
                                    <div className={classes['star-container']} id='starContainer'>
                                        <StarSharp />
                                    </div>
                                    <div className={classes['star-container']} id='starContainer'>
                                        <StarSharp />
                                    </div>
                                    <div className={classes['star-container']} id='starContainer'>
                                        <StarSharp />
                                    </div>
                                    <div className={classes['star-container']} id='starContainer'>
                                        <StarSharp />
                                    </div>
                                    <div className={classes['star-container']} id='starContainer'>
                                        <StarSharp />
                                    </div>
                                </div>
                            </div>
                            <div className='slide-middle'>
                                <div className={classes['headline-area']} id='headlineArea'>
                                    {item.headline}
                                </div>
                                <div className={classes['review-area']} id='reviewArea'>
                                    <p>
                                        {item.review}
                                    </p>
                                </div>
                            </div>
                            <div className='slide-bottom'>
                                <div className={classes['date-area']} id='dateArea'>
                                    {item.date}
                                </div>
                                <div className={classes['small-horizontal-line']} id='smallHorizontalLine'/>
                            </div>
                        </div>
                    ))}
                    
                </div>
                <button className={classes['arrow-right-btn']} onClick={()=>handleClick("right")}>
                    <div className={classes['arrow-right-inner-container']}>
                        <ArrowRightOutlined /> 
                    </div>
                </button>
            </div>

        </div>
    </div>
  );
}

export default forwardRef(Reviews);