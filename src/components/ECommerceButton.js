import classes from './ECommerceButton.module.css';
import { Link } from 'react-router-dom';

const ECommerceButton = ({text, path}) => {
  return (
    <Link to={path}>
      <button className={classes.btn}>
        {text}
      </button>
    </Link>
  );
}

export default ECommerceButton;