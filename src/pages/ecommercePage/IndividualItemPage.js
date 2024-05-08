import classes from './IndividualItemPage.module.css';
import NavBar from './pageSections/NavBar';
import Footer from './pageSections/Footer';
import { RemoveOutlined, AddOutlined } from '@mui/icons-material';

const IndividualItemPage = () => {
  return (
    <>
        <NavBar />
        <div className={classes['main-container']}>
            <div className={classes['left-section']}>
                <h2>Shoes</h2>
                <h3>USD$ 60.00</h3>
                <h4>Shipping calculated at checkout</h4>
                <p>These low-top sneakers redefine casual luxury. Made from Italian suede, their soft texture feels like a second skin. The minimalist design features clean lines and a deconstructed tongue for a relaxed look.</p>
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
                <img src='/optimized-images/ecommerce/models/men/man-7.webp' alt='item in detail' />
            </div>
        </div>
        <Footer />
    </>
  )
}

export default IndividualItemPage;