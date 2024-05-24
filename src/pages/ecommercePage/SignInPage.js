import classes from './SignInPage.module.css';
import NavBar from './pageSections/NavBar';
import Footer from './pageSections/Footer';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/ecommerce/auth-slice';
import { useNavigate } from 'react-router-dom';

let isFirstLoad = true;
let formSubmitted = false;

const SignInPage = () => {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userSigningInError = useSelector(state => state.auth.userSigningIn);
    const [error, setError] = useState(useSelector(state => state.auth.userSigningIn.msg));
    
    const errorHandlerFn = (errorMessage) => {
        console.log(`errorMessage: ${errorMessage}`);
        return;
    }

    const noErrorHandlerFn = () => {
        isFirstLoad = true;
        formSubmitted = false;
        console.log('no error');
        navigate('/project-1');
    }

    useEffect(() => {
        if(isFirstLoad){
            isFirstLoad = false;
            return;
        }
        if(!formSubmitted){
            return;
        }
        setError(userSigningInError.msg);
        console.log(`userSigningInError.msg has changed: ${userSigningInError.msg}`);

        if(userSigningInError.hasError){
            errorHandlerFn(userSigningInError.msg);
        }
        else{
            noErrorHandlerFn();
        }
        
    }, [userSigningInError, formSubmitted]);

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        formSubmitted = true;
        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        dispatch(authActions.signInUser({
            username: enteredUsername,
            password: enteredPassword
        }));  
     
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
                        <p>{error}</p>
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