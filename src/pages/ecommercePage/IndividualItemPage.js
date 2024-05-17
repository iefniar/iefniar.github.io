import classes from './IndividualItemPage.module.css';
import NavBar from './pageSections/NavBar';
import Footer from './pageSections/Footer';
import { RemoveOutlined, AddOutlined } from '@mui/icons-material';
import { useParams } from 'react-router-dom';

import { allItems } from '../../Data';

const IndividualItemPage = () => {
    const params = useParams();
    const foundItem = allItems.find(item => item.id === params.itemId);

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
                            <button><RemoveOutlined /></button>
                            <span>0</span>
                            <button><AddOutlined /></button>
                        </div>
                        <div className={classes['add-to-cart']}>
                            <button>Add To Cart</button>
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