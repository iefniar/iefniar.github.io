import classes from './CategoriesCard.module.css';
import ECommerceButton from './ECommerceButton';

const CategoriesCard = ({image, headline, btnText}) => {
  return (
    <div className={classes['container']}>
        <img src={image} alt='small-preview' />
        <div className={classes['group-container']}>
          <h1>{headline}</h1>
          <ECommerceButton text={btnText} />
        </div>
        
    </div>
  );
}

export default CategoriesCard;