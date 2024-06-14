import classes from './Reviews.module.css';
import { forwardRef, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reviewsItemsSliderTravelProject } from '../../../Data';
import { ArrowLeftOutlined, ArrowRightOutlined, StarSharp } from '@mui/icons-material';

const Reviews = (props, ref) => {
  return (
    <div className={classes['reviews-container']} ref={ref}>
        <div className={classes['reviews-inner-container']}>
            <div className={classes['slider-container']}>
                <div className={classes['arrow-left-container']}>
                    <ArrowLeftOutlined />
                </div>
                <div className={classes['slider-wrapper']}>
                    <div className={classes['slide']}>
                        <div className='slide-top'>
                            <div className={classes['customer-area']}>
                                Sarah Miller
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
                                Exceeded Expectations!
                            </div>
                            <div className={classes['review-area']}>
                                <p>
                                    From the initial consultation to the final farewell, Aujourd'hui Journeys made our dream vacation to Thailand a reality. Their personalized itinerary perfectly captured our desire for relaxation and cultural immersion. We can't wait to book our next adventure with them!
                                </p>
                            </div>
                        </div>
                        <div className='slide-bottom'>
                            <div className={classes['date-area']}>
                                June 7, 2024
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes['arrow-right-container']}>
                    <ArrowRightOutlined />
                </div>
            </div>

        </div>
    </div>
  );
}

export default forwardRef(Reviews);