import classes from "./Card.module.css";
import { Link } from 'react-router-dom';

const Card = ({image, icon}) => {
  return (
    <div className={classes.container}>   
      <Link to='/project-1' onClick={()=>{console.log('image clicked')}}>
        <img className={classes['preview-img']} src={image} alt="project preview" />
      </Link> 
      <Link to='' onClick={()=>{console.log('icon clicked')}}>
        <img className={classes['icon-bottom']} src={icon} alt="icon at the bottom" />
      </Link>
    </div>
  );
}

export default Card;