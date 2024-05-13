import classes from './RegisterPage.module.css';
import NavBar from './pageSections/NavBar';
import Footer from './pageSections/Footer';

const RegisterPage = () => {
  return (
    <>
        <NavBar />
        <div className={classes['main-area']}>
            <div className={classes['form-area']}>
                <form>
                    <div className={classes['form-inner']}>
                        <h3>Register</h3>
                        <div className={classes['two-column-row']}>
                            <div className={classes['column']}>
                                <label htmlFor='username'>Username</label>
                                <input type='text' id='username' />
                            </div>
                            <div className={classes['column']}>
                                <label htmlFor='password'>Password</label>
                                <input type='text' id='password' />
                            </div>
                        </div>
                        <div className={classes['simple-row']}>
                            <label htmlFor='repeat-password'>Repeat password</label>
                            <input type='text' id='repeat-password' />
                        </div>
                        <button>Register</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default RegisterPage;