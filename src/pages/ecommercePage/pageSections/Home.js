import classes from './Home.module.css';
import Project1 from '../../../img/project-1-blue.jpg';
import CategoriesCard from '../../../components/CategoriesCard';
import Man6 from '../../../img/ecommerce/models/men/man-6.jpg';
import Woman1 from '../../../img/ecommerce/models/women/woman-1.jpg';
import Man11 from '../../../img/ecommerce/models/men/man-11.jpg';
import ECommerceButton from '../../../components/ECommerceButton';
import { ArrowCircleDownOutlined } from '@mui/icons-material';
import MiniCard from '../../../components/MiniCard';
import Items from './Items';

const Home = () => {
  return (
    <div className={classes['outer-container']}>
        <div className={classes['hero-section']}>
            <img src='/optimized-images/project-1-blue.webp' alt='ecommerce-hero-section' />
            <div className={classes['hero-text']}>
              <div className={classes['hero-left']}>
                <h1>Confidence Starts <br></br> <span>Here</span></h1>
                <h3>Shop Pre-Curated Outfits & Look Amazing!</h3>
                <ECommerceButton text='Explore' />
              </div>
              <div className={classes['hero-right']} />
            </div>
        </div>
        <div className={classes['middle-section']}>
          <h2>Score Up to <span>50% Off</span> on Your New Favorite Pieces!</h2>
          <h2>Free Shipping & Easy Returns: Shop <span>Risk-Free</span></h2>
          <span><ArrowCircleDownOutlined /></span>
        </div>
        <div className={classes['cards-section']}>
            <CategoriesCard imagePath='/optimized-images/ecommerce/models/men/man-6.webp' headline='New Style' btnText='Shop Now' />
            <CategoriesCard imagePath='/optimized-images/ecommerce/models/women/woman-1.webp' headline='New Style' btnText='Shop Now' />
            <CategoriesCard imagePath='/optimized-images/ecommerce/models/men/man-11.webp' headline='Modern Look' btnText='Shop Now' />
        </div>
        <div className={classes['items-section']}>
          <Items />
        </div>
        
    </div>
  );
}

export default Home;