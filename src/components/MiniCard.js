import classes from './MiniCard.module.css';
import { SearchOutlined, ShoppingBagOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/ecommerce/cart-slice';

const MiniCard = (props) => {
  const { id, url, product, price} = props;
  const path = '/project-1/individual-item/' + id;
  const dispatch = useDispatch();
  
  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
        id,
        url,
        product,
        price
    }));
  }

  return (
      <div className={classes['container']}>
          <img src={url} alt='small-preview' />
          <div className={classes['group-container']}>
            <Link to={path}>
              <div>   
                <SearchOutlined />
              </div>
            </Link>
            <button onClick={addItemHandler}>
              <div><ShoppingBagOutlined /></div>
            </button>
            <div><FavoriteBorderOutlined /></div>
          </div>
      </div>
    
  );
}

export default MiniCard;