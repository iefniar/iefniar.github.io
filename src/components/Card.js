import classes from "./Card.module.css";

const Card = ({image, icon}) => {
  return (
    <div className={classes.container}>    
      <img className={classes['preview-img']} src={image} alt="project preview" />
      <div className={classes['icon-div']}>
          <span>{icon}</span>
      </div>     
    </div>
  );
}

export default Card;