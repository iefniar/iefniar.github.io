import classes from './Reviews.module.css';
import { forwardRef, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reviewsItemsSliderTravelProject } from '../../../Data';
import { ArrowLeftOutlined, ArrowRightOutlined, StarSharp } from '@mui/icons-material';

const Reviews = (props, ref) => {
    const [slideIndex, setSlideIndex] = useState(0);

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
        <div className={classes['reviews-inner-container']}>
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
                                <div className={classes['customer-area']}>
                                    {item.customer}
                                </div>
                                <div className={classes['stars-area']}>
                                    <div className={classes['star-container']}>
                                        <StarSharp />
                                    </div>
                                    <div className={classes['star-container']}>
                                        <StarSharp />
                                    </div>
                                    <div className={classes['star-container']}>
                                        <StarSharp />
                                    </div>
                                    <div className={classes['star-container']}>
                                        <StarSharp />
                                    </div>
                                    <div className={classes['star-container']}>
                                        <StarSharp />
                                    </div>
                                </div>
                            </div>
                            <div className='slide-middle'>
                                <div className={classes['headline-area']}>
                                    {item.headline}
                                </div>
                                <div className={classes['review-area']}>
                                    <p>
                                        {item.review}
                                    </p>
                                </div>
                            </div>
                            <div className='slide-bottom'>
                                <div className={classes['date-area']}>
                                    {item.date}
                                </div>
                                <div className={classes['small-horizontal-line']} />
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