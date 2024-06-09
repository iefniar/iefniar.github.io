import classes from './EcommerceHomePage.module.css';
import NavBar from './pageSections/NavBar';
import Home from './pageSections/Home';
import Footer from './pageSections/Footer';

const EcommerceHomePage = () => {
  return (
    <div className={classes['ecommerce-container']}>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default EcommerceHomePage;