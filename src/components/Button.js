import classes from "./Button.module.css";

const Button = ({text}) => {
  return (
    <button className={classes.button}>{text}</button>
  );
}

export default Button;