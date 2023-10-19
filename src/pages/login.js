import React from 'react';
import {Link, useNavigate,} from "react-router-dom";
import {APP_LOGO} from "../utils";

const InputField = ({name, label, ...props}) => (<div className="input-group">
    <label htmlFor={name}>{label}</label>
    <input id={name} {...props}/>
</div>);


const HomePage = () => {
    const navigate = useNavigate()
    const handleSubmission = e => {
        e.preventDefault()
        navigate('/overview')
    };
    return (
        <div className="login-page">
            <div className="left-side">
                <img src={APP_LOGO} alt='logo'/>
            </div>
            <div className="right-side">
                <div className="card">
                    <form onSubmit={handleSubmission}>
                        <h4>Login</h4>
                        <p>Kindly enter your details to log in</p>
                        <InputField label={'Email Address'} type="email" required />
                        <InputField label={'Password'} type="password" required/>
                        <button>Log in</button>
                        <Link to={"/forgot"} className="forgot-password">Forgot your password?</Link>

                        <div className="privacy-policy-and-terms-of-services">
                            <Link to={'/privacy'}>Privacy Policy</Link>
                            <span className="terms-of-services-span2"> and </span>
                            <Link to={'/terms'}>Terms of services</Link>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    );
}

export default HomePage;