import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useRef, useState } from 'react';

const SignUp = ()=>{
    const login = useRef();
    const password = useRef(null);
    const [passwordValue,setPasswordValue] = useState('');
    const [emailValue,setEmailValue] = useState('');
    const [error, setError] = useState('');


    const handlePasswordChange = (e)=>{
        setPasswordValue(e.target.passwordValue);
        if(e.target.passwordValue?.length < 8 ){
            setError('Password must be at least 8 characters long');
        }
        else setError('');
    }
    const handleEmailChange = (event) => {
        const patterncopmlix =`^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$`;
        const patternSample =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        setEmailValue(event.target.emailValue);
        const testResult = patternSample.test(emailValue);

        console.log(testResult);
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
    }
    return(
        <>
        <div className="form-container sign-in">
            <form>
                <h1 className="">Sign In </h1>
                <div className="social-icons">
                    <a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
                <span>or use your email for password</span>
                <input type="email" placeholder="Email" name="email"
                value={emailValue} onChange={handleEmailChange}/> 

                <input className={error ? 'input-error' : ''} type="password"  placeholder="Password"
                 name="password" ref={password} value={passwordValue} onChange={handlePasswordChange}/>

                {error && <p className='error-message'>{error}</p>}
                <a href="#">Forget Your Password?</a>
                <button>Sign In</button>
            </form>
        </div>

        </>
    );
}
export default SignUp;