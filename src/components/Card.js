import classes from "./Card.module.css";
import { Link } from 'react-router-dom';
import ReactGA from "react-ga4";

const Card = ({imagePath, link}) => {
  ReactGA.event({
    category: link,
    action: `click on explore/main card to see: ${link}`,
    label: imagePath
  });

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