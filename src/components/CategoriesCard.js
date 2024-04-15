import classes from './CategoriesCard.module.css';

const CategoriesCard = ({image, headline, btnText}) => {
  return (
    <div className={classes['container']}>
        <img src={image} alt='small-preview' />
        <h1>{headline}</h1>
        <button>{btnText}</button>
    </div>
  );
}

export default CategoriesCard;