import React, {useState} from 'react'
import './loginpage.css'

const LoginPage = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };
    return (
        <>
        <div className="LoginContainer">
            <div className="LoginDetails">
                <div className="Rectangle37">
                    <div className="Rectangle38"/>
                    <div className="Frame2">
                        <div className="Login">Login</div>
                        <div className="SeeYourGrowthAndGetSupport">See your growth and get support!</div>
                    </div>
                </div>
                <div className="InputCollection">
                    <div className="Group4">
                        <div className="rectangle34">
                            <div className="Email">Username*</div>
                            <div className="rectangle35">
                                <div className="EnterYouEmail">
                                    Enter your Username
                                </div>
                            </div>
                        </div>
                        <div className="rectangle34">
                            <div className="Email">Password*</div>
                            <div className="rectangle35" >
                                <div className="EnterYouEmail">Enter your password</div>
                            </div>
                        </div>
                    </div>
                    <div className="Rectangle39">
                        <div className="Group3">
                            <div className="check-box" onClick={handleCheckboxToggle}>
                                {isChecked && <div className="checkmark">✓</div>}
                            </div>
                            <div className="RememberMe">Remember me</div>
                        </div>
                        <div className="ForgotPassword">Forgot password?</div>
                    </div>
                    <div className='login-btn'>
                        Log In
                    </div>
                    <div className='Rectangle40'>Not regestered yet? Create a new account</div>
                </div>
            </div>
            <div className='Background'>
                
            </div>
        </div>
        </>

    );
}

export default LoginPage;