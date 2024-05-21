import classes from './MiniCard.module.css';
import { SearchOutlined, ShoppingBagOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/ecommerce/cart-slice';
import { useNavigate } from 'react-router-dom';

const MiniCard = (props) => {
  const { id, url, product, price} = props;
  const path = '/project-1/individual-item/' + id;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const existingItem = cartItems.find(item => item.id === id);
  const classToggler = existingItem? classes.active : classes.inactive;
  const userLoggedIn = useSelector(state => state.auth.anyUserLoggedIn);
  const navigate = useNavigate();

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
        id,
        url,
        product,
        price
    }));
  }

  const trashItemHandler = () => {
    dispatch(cartActions.sendItemToTrash(id));
  }

  const btnShoppingCartActionHandler = () => {
    if(!userLoggedIn){
      navigate('/project-1/sign-in');
    }
    else{
      if(existingItem){
        trashItemHandler();
      }
      else{
        addItemHandler();
      }
    }
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
            <button onClick={btnShoppingCartActionHandler}>
              <div className={classToggler}><ShoppingBagOutlined /></div>
            </button>
            <div><FavoriteBorderOutlined /></div>
          </div>
      </div>
    
  );
}

export default MiniCard;