import classes from './IndividualItemPage.module.css';
import NavBar from './pageSections/NavBar';
import Footer from './pageSections/Footer';
import { RemoveOutlined, AddOutlined } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/ecommerce/cart-slice';
import { useNavigate } from 'react-router-dom';

import { allItems } from '../../Data';

const IndividualItemPage = () => {
    const params = useParams();
    const foundItem = allItems.find(item => item.id === params.itemId);
    const cartItems = useSelector(state => state.cart.items);
    const existingItem = cartItems.find(item => item.id === foundItem.id);
    const dispatch = useDispatch();
    const userLoggedIn = useSelector(state => state.auth.anyUserLoggedIn);
    const navigate = useNavigate();
    const textToDisplayOnButton = (
        <>
            {existingItem? `Remove From Cart` : `Add To Cart`}
        </>
    );

    const quantityDynamicValue = (
        <>
            {existingItem? `${existingItem.quantity}` : `0`}
        </>
    );

    const addItemHandler = (currentItem) => {
        if(!userLoggedIn){
            navigate('/project-1/sign-in');
        }
        else{
            dispatch(cartActions.addItemToCart({
                id: currentItem.id,
                url: currentItem.url,
                product: currentItem.product,
                price: currentItem.price
            }));
        }   
    }

    const removeItemHandler = (currentItem) => {
        if(!userLoggedIn){
            navigate('/project-1/sign-in');
        }
        else{
            dispatch(cartActions.removeItemFromCart(currentItem.id));
        }
    }

    const btnActionHandler = (currentItem) => {
        if(!userLoggedIn){
            navigate('/project-1/sign-in');
        }
        else{
            if(!existingItem){
                addItemHandler(currentItem);
            }
            else{
                removeItemHandler(currentItem);
            }
        }    
    }

    return (
        <>
            <NavBar />
            <div className={classes['main-container']}>
                <div className={classes['left-section']}>
                    <h2>{foundItem.product}</h2>
                    <h3>USD$ {foundItem.price}</h3>
                    <h4>Shipping calculated at checkout</h4>
                    <p>{foundItem.description}</p>
                    <div className={classes['actions-section']}>
                        <div className={classes['quantity-selection']}>
                            <button onClick={() => {removeItemHandler(foundItem)}}><RemoveOutlined /></button>
                            <span>{quantityDynamicValue}</span>
                            <button onClick={() => {addItemHandler(foundItem)}}><AddOutlined /></button>
                        </div>
                        <div className={classes['add-to-cart']}>
                            <button onClick={() => {btnActionHandler(foundItem)}}>{textToDisplayOnButton}</button>
                        </div>
                    </div>
                </div>
                <div className={classes['right-section']}>
                    <img src={foundItem.url} alt='item in detail' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default IndividualItemPage;