import classes from './ECommerceButton.module.css';

const ECommerceButton = ({text}) => {
  return (
    <button className={classes.btn}>{text}</button>
  );
}

export default ECommerceButton;