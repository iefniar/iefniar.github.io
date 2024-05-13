import classes from './NavBar.module.css';
import { ArrowBackOutlined, ShoppingBagOutlined, SearchOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const goBackHandler = () => {
        navigate(-1); 
    };

    return (
        <div className={classes['navBar-container']}>
            <div className={classes['navBar-left']}>
                <div>
                    <button className={classes['go-back-btn']} onClick={goBackHandler}>
                        <ArrowBackOutlined />
                    </button>  
                </div>
                <Link to='/project-1'>
                    <div>
                        Logo
                    </div>
                </Link>
            </div>
            <div className={classes['navBar-right']}>
                <div className={classes['navBar-search-container']}>
                    <input placeholder='Search' />
                    <span><SearchOutlined /></span>
                </div>
                <Link to='/project-1/register'>
                    <div>
                        Register
                    </div>
                </Link>
                <Link to='/project-1/sign-in'>
                    <div>
                        Sign In
                    </div>
                </Link>
                <Link to='/project-1/cart'>
                    <div>
                        <Badge badgeContent='3' color='primary'>
                            <ShoppingBagOutlined />
                        </Badge>
                    </div>
                </Link>
            </div>


        </div>
    );
}

export default NavBar;