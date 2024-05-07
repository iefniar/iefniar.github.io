import classes from './EcommerceHomePage.module.css';
import NavBar from './pageSections/NavBar';
import Home from './pageSections/Home';
import Footer from './pageSections/Footer';

const EcommerceHomePage = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default EcommerceHomePage;