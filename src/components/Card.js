import classes from "./Card.module.css";
import { Link } from 'react-router-dom';

const Card = ({image, link}) => {
  return (
    <div className={classes.container}>   
      <Link to={link}>
        <img className={classes['preview-img']} src={image} alt="project preview" />
      </Link> 
      <div className={`${classes['text-type-1']} ${classes['text-over-image']}`}>
        Go to
      </div>
    </div>
  );
}

export default Card;