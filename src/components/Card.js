import classes from "./Card.module.css";
import { Link } from 'react-router-dom';

const Card = ({imagePath, link}) => {
  return (
    <div className={classes.container}>   
      <Link to={link}>
        <img className={classes['preview-img']} src={imagePath} alt="project preview" />
        <div className={`${classes['text-type-1']} ${classes['text-over-image']}`}>
          Explore
          <div className={classes['text-underline']} />
        </div>
      </Link> 
      
    </div>
  );
}

export default Card;