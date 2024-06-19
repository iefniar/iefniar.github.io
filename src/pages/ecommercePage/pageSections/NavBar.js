import classes from './NavBar.module.css';
import { ShoppingBagOutlined, SearchOutlined, HomeOutlined, ArrowBackIosNewOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { authActions } from '../../../store/ecommerce/auth-slice';
import { cartActions } from '../../../store/ecommerce/cart-slice';
import { favoriteActions } from '../../../store/ecommerce/favorite-slice';

const NavBar = ({showNavBarSearchContainer = false, searchCallbackFn = (returnedValue) => {}}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goBackHandler = () => {
        navigate(-1); 
    };

    const totalItemsInCart = useSelector(state => state.cart.items.length);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        searchCallbackFn(event.target.value);
    };

    const userLoggedIn = useSelector(state => state.auth.anyUserLoggedIn);

    const logOutHandler = () => {
        dispatch(cartActions.emptyCart());
        dispatch(favoriteActions.emptyFavorites());
        dispatch(authActions.logOutUser());
        navigate('/project-1');
    }

    return (
        <div className={classes['navBar-container']}>
            <div className={classes['navBar-left']}>
                <div>
                    <button className={classes['go-back-btn']} onClick={goBackHandler}>
                        <ArrowBackIosNewOutlined />
                    </button>  
                </div>
                <Link to='/'>
                    <div>
                        <HomeOutlined />
                    </div>
                </Link>
            </div>
            <div className={classes['navBar-right']}>
                {showNavBarSearchContainer? (
                    <div className={classes['navBar-search-container']}>
                        <input type='text' placeholder='Search by color, product...' value={searchTerm} onChange={handleChange} />
                        <span><SearchOutlined /></span>
                    </div>
                ) : (
                    <div className={classes['navBar-search-container-hidden']}>
                        <input type='text' disabled />
                        <span><SearchOutlined /></span>
                    </div>
                )}
                {!userLoggedIn? (
                    <Link to='/project-1/register'>
                        <div>
                            Register
                        </div>
                    </Link>
                    ) : (
                        <button onClick={logOutHandler}>
                            Log Out
                        </button>
                    )
                }
                {!userLoggedIn && (
                    <Link to='/project-1/sign-in'>
                        <div>
                            Sign In
                        </div>
                    </Link>
                    )
                }
                {userLoggedIn? (
                    <Link to='/project-1/cart'>
                        <div>
                            <Badge badgeContent={totalItemsInCart} color='primary'>
                                <ShoppingBagOutlined />
                            </Badge>
                        </div>
                    </Link>
                    ) : (
                    <Link to='/project-1/sign-in'>
                        <div>
                            <Badge badgeContent={totalItemsInCart} color='primary'>
                                <ShoppingBagOutlined />
                            </Badge>
                        </div>
                    </Link>
                    )
                }
                
            </div>

        </div>
    );
}

export default NavBar;