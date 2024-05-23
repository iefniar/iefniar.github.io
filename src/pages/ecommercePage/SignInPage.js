import classes from './SignInPage.module.css';
import NavBar from './pageSections/NavBar';
import Footer from './pageSections/Footer';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/ecommerce/auth-slice';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        dispatch(authActions.signInUser({
            username: enteredUsername,
            password: enteredPassword
        }));

        navigate('/project-1/items');
    }

  return (
    <>
        <NavBar />
        <div className={classes['main-area']}>
            <div className={classes['form-area']}>
                <form onSubmit={formSubmissionHandler}>
                    <div className={classes['form-inner']}>
                        <h3>Sign In</h3>
                        <div className={classes['simple-row']}>
                            <label htmlFor='username'>Username</label>
                            <input type='text' id='username' ref={usernameInputRef} />
                        </div>
                        <div className={classes['simple-row']}>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' ref={passwordInputRef} />
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