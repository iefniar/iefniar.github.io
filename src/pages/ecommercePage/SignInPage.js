import classes from './SignInPage.module.css';
import NavBar from './pageSections/NavBar';
import Footer from './pageSections/Footer';

const SignInPage = () => {
  return (
    <>
        <NavBar />
        <div className={classes['main-area']}>
            <div className={classes['form-area']}>
                <form>
                    <div className={classes['form-inner']}>
                        <h3>Sign In</h3>
                        <div className={classes['simple-row']}>
                            <label htmlFor='username'>Username</label>
                            <input type='text' id='username' />
                        </div>
                        <div className={classes['simple-row']}>
                            <label htmlFor='password'>Password</label>
                            <input type='text' id='password' />
                        </div>
                        <button>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default SignInPage;