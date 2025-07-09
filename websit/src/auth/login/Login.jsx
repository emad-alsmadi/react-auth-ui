import '../sign-in/SignUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    return (
        <>
            <div className="form-container sign-up">
                <form>
                    <h1 className="">Create Account</h1>
                    <div className="social-icons">
                        <a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                    <span>or use your email for registeration</span>
                    <input type="text" placeholder="Name" name="name" />
                    <input type="email" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button>Sign UP</button>
                </form>
            </div>
        </>
    );
}
export default Login;