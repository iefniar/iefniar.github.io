import classes from './RegisterPage.module.css';
import NavBar from './pageSections/NavBar';
import Footer from './pageSections/Footer';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/ecommerce/auth-slice';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const repeatPasswordInputRef = useRef();
    const [enteredUsernameIsValid, setEnteredUsernameIsValid] = useState(false);
    const [enteredUsernameIsTouched, setEnteredUsernameIsTouched] = useState(false);
    const [showUsernameErrorMsg, setShowUsernameErrorMsg] = useState(false);
    const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(false);
    const [enteredPasswordIsTouched, setEnteredPasswordIsTouched] = useState(false);
    const [showPasswordErrorMsg, setShowPasswordErrorMsg] = useState(false);
    const [enteredRepeatPasswordIsValid, setEnteredRepeatPasswordIsValid] = useState(false);
    const [enteredRepeatPasswordIsTouched, setEnteredRepeatPasswordIsTouched] = useState(false);
    const [showRepeatPasswordErrorMsg, setShowRepeatPasswordErrorMsg] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredRepeatPassword = repeatPasswordInputRef.current.value;

        setEnteredUsernameIsTouched(true);
        setEnteredPasswordIsTouched(true);
        setEnteredRepeatPasswordIsTouched(true);

        if(enteredUsername.trim() === ''){
            setEnteredUsernameIsValid(false);
            setShowUsernameErrorMsg(true);
            return;
        }
        else{
            setEnteredUsernameIsValid(true);
            setShowUsernameErrorMsg(false);
        }

        if(enteredPassword.trim() === ''){
            setEnteredPasswordIsValid(false);
            setShowPasswordErrorMsg(true);
            return;
        }
        else{
            setEnteredPasswordIsValid(true);
            setShowPasswordErrorMsg(false);
        }

        if(enteredRepeatPassword.trim() === '' || enteredRepeatPassword !== enteredPassword){
            setEnteredRepeatPasswordIsValid(false);
            setShowRepeatPasswordErrorMsg(true);
            return;
        }
        else{
            setEnteredRepeatPasswordIsValid(true);
            setShowRepeatPasswordErrorMsg(false);
        }

        dispatch(authActions.registerUser({
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
                        <h3>Register</h3>
                        <div className={classes['two-column-row']}>
                            <div className={classes['column']}>
                                <label htmlFor='username'>Username</label>
                                <input type='text' id='username' ref={usernameInputRef} />
                                {showUsernameErrorMsg && (
                                    <p>Username must not be empty</p>
                                )}
                            </div>
                            <div className={classes['column']}>
                                <label htmlFor='password'>Password</label>
                                <input type='text' id='password' ref={passwordInputRef} />
                                {showPasswordErrorMsg && (
                                    <p>Password must not be empty</p>
                                )}
                            </div>
                        </div>
                        <div className={classes['simple-row']}>
                            <label htmlFor='repeat-password'>Repeat password</label>
                            <input type='text' id='repeat-password' ref={repeatPasswordInputRef} />
                            {showRepeatPasswordErrorMsg && (
                                <p>The repeated password must not be empty and must match the password introduced before</p>
                            )}
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