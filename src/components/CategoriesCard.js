import classes from './CategoriesCard.module.css';
import ECommerceButton from './ECommerceButton';

const CategoriesCard = ({id, imagePath, headline, btnText, btnPath}) => {
  return (
    <div className={classes['container']} id={id}>
        <img src={imagePath} alt='small-preview' />
        <div className={classes['group-container']}>
          <h1>{headline}</h1>
          <ECommerceButton text={btnText} path={btnPath} />
        </div>
    </div>
  );
}

export default CategoriesCard;