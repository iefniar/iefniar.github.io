import classes from './ItemsInCart.module.css';
import { itemsInShoppingCart } from '../../../Data';
import { DeleteOutlined, AddOutlined, RemoveOutlined } from '@mui/icons-material'; 
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../../store/ecommerce/cart-slice';

const ItemsInCart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const orderTotal = useSelector(state => state.cart.orderTotal);
    const dispatch = useDispatch();

    const addItemHandler = (currentItem) => {
        dispatch(cartActions.addItemToCart({
            id: currentItem.id,
            url: currentItem.url,
            product: currentItem.product,
            price: currentItem.price
        }));
    }

    const removeItemHandler = (currentItemId) => {
        dispatch(cartActions.removeItemFromCart(currentItemId));
    }

    const trashItemHandler = (currentItemId) => {
        dispatch(cartActions.sendItemToTrash(currentItemId));
    }

    return (
        <div className={classes['container']}>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <div className={classes['item-container']}>
                            <div className={classes['item-top']}>
                                <div className={classes['left']}>
                                    <img src={item.url} alt='small-preview' />
                                </div>
                                <div className={classes['middle-right-container']}>
                                    <div className={classes['middle']}>
                                        <div>
                                            <h3><span>Product:&nbsp; </span></h3>
                                            <h3>{item.product}</h3>
                                        </div>
                                    </div>
                                    <div className={classes['right']}>
                                        <div>
                                            <h3><span>Price:&nbsp; </span></h3>
                                            <h3>USD$ {item.price}</h3>
                                        </div>
                                        <div>
                                            <h3><span>Quantity:&nbsp; </span></h3>
                                            <div className={classes['quantity-selection']}>
                                                <button onClick={() => {removeItemHandler(item.id)}}><RemoveOutlined /></button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => {addItemHandler(item)}}><AddOutlined /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes['item-bottom']}>
                                <div className={classes['remove-item']}>
                                    <button onClick={() => {trashItemHandler(item.id)}}><DeleteOutlined /></button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={classes['order-summary']}>
                <h2>Order Summary</h2>
                <div className={classes['order-rows']}>
                    <h3>Subtotal</h3>
                    <h3>USD$ {orderTotal}</h3>
                </div>
                <div className={classes['order-rows']}>
                    <h3>Shipping</h3>
                    <h3>USD$ 0.00</h3>
                </div>
                <br/>
                <div className={classes['order-rows']}>
                    <h3><span>Total</span></h3>
                    <h3><span>USD$ {orderTotal}</span></h3>
                </div>
                <Link to='/project-1/checkout'>
                    <button>Checkout</button>
                </Link>
            </div>
        </div>
    )
}

export default ItemsInCart;