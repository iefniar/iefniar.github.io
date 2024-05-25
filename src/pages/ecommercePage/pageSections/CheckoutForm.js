import classes from './CheckoutForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../../store/ecommerce/cart-slice';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
    const totalItemsInCart = useSelector(state => state.cart.items.length);
    const itemsInShoppingCart = useSelector(state => state.cart.items);
    const orderTotal = useSelector(state => state.cart.orderTotal);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formSubmissionHandler = () => {
        dispatch(cartActions.emptyCart());
        navigate('/project-1/success');
    }
        
    return (
        <div className={classes['main-container']}>
            <div className={classes['form-area']}>
                <form onSubmit={formSubmissionHandler}>
                    <div className={classes['form-inner']}>
                        <h3>Shipping Address</h3>
                        <div className={classes['two-column-row']}>
                            <div className={classes['column']}>
                                <label htmlFor='firstname'>First Name*</label>
                                <input type='text' id='firstname' />
                            </div>
                            <div className={classes['column']}>
                                <label htmlFor='lastname'>Last Name*</label>
                                <input type='text' id='lastname' />
                            </div>
                        </div>
                        <div className={classes['simple-row']}>
                            <label htmlFor='address'>Street Address*</label>
                            <input type='text' id='address' />
                        </div>
                        <div className={classes['two-column-row']}>
                            <div className={classes['column']}>
                                <label htmlFor='country'>Country*</label>
                                <input type='text' id='country' />
                            </div>
                            <div className={classes['column']}>
                                <label htmlFor='state'>State/Province*</label>
                                <input type='text' id='state' />
                            </div>
                        </div>
                        <div className={`${classes['two-column-row']} ${classes['margin-bottom-utility']} `}>
                            <div className={classes['column']}>
                                <label htmlFor='city'>City*</label>
                                <input type='text' id='city' />
                            </div>
                            <div className={classes['column']}>
                                <label htmlFor='postalcode'>Postal Code*</label>
                                <input type='text' id='postalcode' />
                            </div>
                        </div>
                        <h3>Shipping Costs</h3>
                        <div className={classes['special-row']}>
                            <h4>Free Shipping</h4>
                            <h4>USD$ 0.00</h4>
                        </div>
                        {totalItemsInCart === 0 ? (
                            <></>
                        ) : (
                            <button>Checkout Now</button>
                        )}   
                    </div>
                </form>
            </div>
            <div className={classes['cart-area']}>
                <div className={classes['cart-top']}>
                    <h3>{totalItemsInCart} Items in Cart</h3>
                </div>
                <ul>
                    {itemsInShoppingCart.map((item) => (
                        <li key={item.id}>
                            <div className={classes['cart-middle']}>
                                <div className={classes['cart-column']}>
                                    <img src={item.url} alt='small-preview' />
                                </div>
                                <div className={classes['cart-column']}>
                                    <h3>{item.product}</h3>
                                </div>
                                <div className={classes['cart-column']}>
                                    <h3>Qty: {item.quantity}</h3>
                                </div>
                                <div className={classes['cart-column']}>
                                    <h3>USD$ {item.totalPrice}</h3>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={classes['cart-bottom']}>
                    <h4>USD$ {orderTotal}</h4>
                </div>
            </div>
        </div>
    )
}

export default CheckoutForm;