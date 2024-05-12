import classes from './CheckoutPage.module.css';
import NavBar from './pageSections/NavBar';
import CheckoutForm from './pageSections/CheckoutForm';
import Footer from './pageSections/Footer';

const CheckoutPage = () => {
  return (
    <>
        <NavBar />
        <div className={classes.headline}>
            <h2>Checkout</h2>
        </div>
        <CheckoutForm />
        <Footer />
    </>
  );
}

export default CheckoutPage;