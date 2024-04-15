import classes from './Home.module.css';
import Project1 from '../../../img/project-1-blue.jpg';
import CategoriesCard from '../../../components/CategoriesCard';
import Man6 from '../../../img/ecommerce/models/men/man-6.jpg';
import Woman1 from '../../../img/ecommerce/models/women/woman-1.jpg';
import Man11 from '../../../img/ecommerce/models/men/man-11.jpg';

const Home = () => {
  return (
    <div className={classes['outer-container']}>
        <div className={classes['hero-section']}>
            <img src={Project1} alt='ecommerce-hero-section' />
        </div>
        <div className={classes['cards-section']}>
            <CategoriesCard image={Man6} headline='New Style' btnText='Shop Now' />
            <CategoriesCard image={Woman1} headline='New Style' btnText='Shop Now' />
            <CategoriesCard image={Man11} headline='Modern Look' btnText='Shop Now' />
            
        </div>
    </div>
  );
}

export default Home;