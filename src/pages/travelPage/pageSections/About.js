import classes from './About.module.css';
import { forwardRef } from 'react';

const About = (props, ref) => {
  return (
    <div className={classes['main-container']} ref={ref} >
        <div className={classes['left-content']}>
            <img src='/optimized-images/travel/webp/portrait-5.webp' alt='vacation destination' />
            <img src='/optimized-images/travel/webp/portrait-4.webp' alt='vacation destination' />
        </div>
        <div className={classes['right-content']}>
            <h2>Why Aujourd'hui Journeys</h2>
            <p>
                At Aujourd'hui Journeys, we are passionate about crafting exceptional travel experiences that transform your aspirations into reality. Our team of expert travel designers possesses unparalleled knowledge and dedication to exceeding your expectations.
            </p>
            <p>
                We understand that every traveler is unique. Through a collaborative approach, we meticulously curate personalized itineraries that align with your specific interests, budget, and travel style. Whether you seek tranquility on a secluded beach, exhilarating adventure in breathtaking landscapes, or an immersive exploration of vibrant cultures, our meticulous planning ensures a seamless and unforgettable journey.
            </p>
            <p>
                Don't delay the adventure you deserve. Explore our curated destinations for inspiration, or connect with our travel designers to co-create your dream vacation. The world awaits your discovery - let Aujourd'hui Journeys be your trusted guide. 
            </p>
        </div>
    </div>
  )
}

export default forwardRef(About);