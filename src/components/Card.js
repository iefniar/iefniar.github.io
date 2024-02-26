import classes from "./Card.module.css";

const Card = ({icon, headlineTop, headlineBottom, text}) => {
  return (
    <div className={classes.container}>
        <div className={classes.content}>
            <div className={classes['icon-div']}>
                <span>{icon}</span>
            </div>
            <h4>{headlineTop}</h4>
            <h4>{headlineBottom}</h4>
            <p>{text}</p>
        </div>
        
    </div>
  );
}

export default Card;