import classes from './NavBar.module.css';
import { ArrowBackOutlined, ShoppingCartOutlined, SearchOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
                <div>
                    Logo
                </div>
            </div>
            <div className={classes['navBar-right']}>
                <div className={classes['navBar-search-container']}>
                    <input placeholder='Search' />
                    <span><SearchOutlined /></span>
                </div>
                <div>
                    register
                </div>
                <div>
                    sign in
                </div>
                <div>
                    <Badge badgeContent='3' color='primary'>
                        <ShoppingCartOutlined />
                    </Badge>
                </div>
            </div>


        </div>
    );
}

export default NavBar;