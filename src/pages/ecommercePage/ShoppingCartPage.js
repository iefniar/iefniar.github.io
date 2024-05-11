import classes from './ShoppingCartPage.module.css';
import NavBar from './pageSections/NavBar';
import Footer from './pageSections/Footer';
import ItemsInCart from './pageSections/ItemsInCart';

const ShoppingCartPage = () => {
  return (
    <>
        <NavBar />
        <div className={classes.headline}>
            <h2>Your Cart</h2>
        </div>
        <ItemsInCart />
        <Footer />
    </>
  )
}

export default ShoppingCartPage;