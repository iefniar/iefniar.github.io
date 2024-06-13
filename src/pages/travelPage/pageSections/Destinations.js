import classes from './Destinations.module.css';
import { forwardRef } from 'react';
import DestinationsCard from '../../../components/DestinationsCard';

const Destinations = (props, ref) => {
  return (
    <div className={classes['destinations-container']} ref={ref}>
        <div className={classes['destinations-inner-container']}>
            <div className={classes['card']}>
                <DestinationsCard imgPath='/optimized-images/travel/webp/portrait-3.webp' days='4' continent='America' headline='Waterfalls and beach' description='A beautiful destination to spend the holidays with your family' price='120.00' />
            </div>
            <div className={classes['in-between']}>
                <div className={classes['vertical-line-top']} />
                <div className={classes['small-text']}>
                    OUR RANGES
                </div>
                <div className={classes['large-text']}>
                    Already under construction
                </div>
                <div className={classes['vertical-line-bottom']} />
            </div>
            <div className={classes['card']}>
                <DestinationsCard imgPath='/optimized-images/travel/webp/portrait-6.webp' days='7' continent='Asia' headline='Delicious food' description='A beautiful destination to spend the holidays with your family' price='350.00' />
            </div>

        </div>
    </div>
  );
}

export default forwardRef(Destinations);