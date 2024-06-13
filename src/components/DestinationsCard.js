import classes from './DestinationsCard.module.css';

const DestinationsCard = (props) => {
    const {imgPath, days, continent, headline, description, price} = props;
    
  return (
    <div className={classes['card-container']}>
        <img src={imgPath} alt='vacation destination' />
        <div className={classes['upper-section']}>
            <div>
                {days} days
            </div>
            <div>
                {continent}
            </div>
        </div>
        <div className={classes['middle-section']}>
            <div className={classes['middle-headline']}>
                {headline}
            </div>
            <div className={classes['middle-description']}>
                {description}
            </div>
        </div>
        <div className={classes['bottom-section']}>
            USD {price}
        </div>
    </div>
  );
}

export default DestinationsCard;