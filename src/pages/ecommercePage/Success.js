import classes from './Success.module.css';
import NavBar from './pageSections/NavBar';
import Footer from './pageSections/Footer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/project-1');
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        <NavBar />
        <div className={classes['main-container']}>
            <div className={classes['left-content']}>
                <h2>Success</h2>
                <h3>Your order is being prepared...</h3>
                <h4>Thanks for your purchase</h4>
            </div>
            <div className={classes['right-content']}>
                <img src='/optimized-images/ecommerce/models/both/both-2.webp' alt='success' />
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Success;