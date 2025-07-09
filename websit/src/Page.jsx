
import SignUp from './auth/sign-in/SignUp';
import Login from './auth/login/Login';
import { useRef } from 'react';

const Page =() =>{
    const containerPage =useRef(null);
    const loginBtn = useRef();
    const registerBtn =useRef();
    
    function handleClickRegister(){
        if(containerPage.current) {
            containerPage.current.classList.add("active");
        }
    }
    function handleClickLogin(){
        if(containerPage.current) {
            containerPage.current.classList.remove("active");
        }
    }
    return(
        <>
            <div className="container-page" ref={containerPage}>
                <Login />
                <SignUp />
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button className="hidden" onClick={handleClickLogin} ref={loginBtn}>Sign Up</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                                <h1>Welcome Back</h1>
                                <p>Enter your personal details to use all of site features</p>
                                <button className="register" onClick={handleClickRegister} ref={registerBtn}>Sign Up</button>
                        </div>
                    </div>
                </div>       
            </div> 
        </>
    );
}

export default Page;