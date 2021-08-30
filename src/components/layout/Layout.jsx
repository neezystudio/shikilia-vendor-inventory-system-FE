import React, { useState, useEffect } from 'react'
import './Layout.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Routes from '../Routes'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'

import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction'
import Wrapper from '../wrapper/Wrapper'
import Button from '../button/Button'
import { Spinner } from 'react-bootstrap'
import ScrollToTop from '../scroll-to-top/ScrollToTop'

function Layout() {
    const [token, setToken] = useState(true);
    const [authenticationType, setAuthenticationType] = useState('sign-in');
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [businessName, setBusinessName] = useState();
    const [businessRegestrationCode, setBusinessRegestrationCode] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const [loading, setLoading] = useState(false);

    const themeReducer = useSelector(state => state.ThemeReducer);
    const dispatch = useDispatch(true);

    const renderLoading = () => (
        <Spinner animation="border" variant="light"/>
    )

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');
        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light');

        dispatch(ThemeAction.setMode(themeClass))
        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
        <BrowserRouter>
            {token === false ? (
                <div className={`authentication ${themeReducer.mode} ${themeReducer.color}`}>
                    {
                        authenticationType === 'sign-in' ? (
                            // Sign In
                            <div className="authentication__signIn">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card__head">
                                                <div className="authentication__company-logo">
                                                    <img src="https://res.cloudinary.com/emacon-production/image/upload/v1623146015/Shikilia/Shikilia_Stores_Logo_zdzer3.png" alt="Company Logo"/>
                                                </div>
                                                <Wrapper position="center">
                                                    <h2>VENDOR CONSOLE LOGIN</h2>
                                                </Wrapper>
                                            </div>

                                            <div className="card__body">
                                                <div className="authentication__signIn-form">
                                                    <form>
                                                        <div className="authentication__signIn-input">
                                                            <input 
                                                                required
                                                                type="text" 
                                                                placeholder="Username"
                                                                value={userName}
                                                                onChange={(e) => setUserName(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="authentication__signIn-input">
                                                            <input 
                                                                required
                                                                type={showPassword ? 'text' : 'password'} 
                                                                placeholder="Password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                            <i 
                                                                className={`bx ${showPassword ? 'bxs-low-vision' : 'bxs-show'}`}
                                                                onClick={() => setShowPassword(!showPassword)}
                                                            ></i>
                                                        </div>

                                                        <div className="authentication__signIn-btn">
                                                            <Button
                                                                content={loading ? renderLoading() : 'Sign In'}
                                                                width="fullWidth"
                                                            />
                                                        </div>
                                                    </form>

                                                    <Wrapper position="center">
                                                        <a 
                                                            href="#"
                                                            onClick={() => setAuthenticationType('forgot-password')}
                                                        >
                                                            Forgot Password?
                                                        </a>
                                                    </Wrapper>

                                                    <div className="authentication__signUp-link">
                                                        <Wrapper position="center">
                                                            <span>
                                                            {`Don't have an account yet? `}  
                                                            </span>
                                                            <a 
                                                                href="#"
                                                                onClick={() => setAuthenticationType('sign-up')}
                                                            >
                                                                {`  Sign up`}
                                                            </a> 
                                                        </Wrapper>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (<></>) &&
                        authenticationType === 'sign-up' ?
                        (
                            // Sign Up
                            <div className="authentication__signUp">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card__head">
                                                <div className="authentication__company-logo">
                                                    <img src="https://res.cloudinary.com/emacon-production/image/upload/v1623146015/Shikilia/Shikilia_Stores_Logo_zdzer3.png" alt="Company Logo"/>
                                                </div>
                                                <Wrapper position="center">
                                                    <h2>VENDOR CONSOLE SIGN UP</h2>
                                                </Wrapper>
                                            </div>

                                            <div className="card__body">
                                                <div className="authentication__signUp-form">
                                                    <form>
                                                        <div className="authentication__signUp-input">
                                                            <input 
                                                                required
                                                                type="text" 
                                                                placeholder="Full Name"
                                                                value={name}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="authentication__signUp-input">
                                                            <input 
                                                                required
                                                                type="text" 
                                                                placeholder="Username"
                                                                value={userName}
                                                                onChange={(e) => setUserName(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="authentication__signUp-input">
                                                            <input 
                                                                required
                                                                type="email" 
                                                                placeholder="Email Address"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="authentication__signUp-input">
                                                            <input 
                                                                required
                                                                type="text" 
                                                                placeholder="Business Name"
                                                                value={businessName}
                                                                onChange={(e) => setBusinessName(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="authentication__signUp-input">
                                                            <input 
                                                                required
                                                                type="text" 
                                                                placeholder="Business Regestration Number"
                                                                value={businessRegestrationCode}
                                                                onChange={(e) => setBusinessRegestrationCode(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="authentication__signUp-input">
                                                            <input 
                                                                required
                                                                type={showPassword ? 'text' : 'password'} 
                                                                placeholder="Password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                            <i 
                                                                className={`bx ${showPassword ? 'bxs-low-vision' : 'bxs-show'}`}
                                                                onClick={() => setShowPassword(!showPassword)}
                                                            ></i>
                                                        </div>
                                                        <div className="authentication__signUp-input">
                                                            <input 
                                                                required
                                                                type="password"
                                                                placeholder="Confirm Password"
                                                                value={confirmPassword}
                                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="authentication__signUp-btn">
                                                            <Button
                                                                content={loading ? renderLoading() : 'Sign Up'}
                                                                width="fullWidth"
                                                            />
                                                        </div>
                                                    </form>

                                                    <div className="authentication__signIn-link">
                                                        <Wrapper position="center">
                                                            <span>
                                                            {`Already have an account yet? `}  
                                                            </span>
                                                            <a 
                                                                href="#"
                                                                onClick={() => setAuthenticationType('sign-in')}
                                                            >
                                                                {`  Sign in`}
                                                            </a> 
                                                        </Wrapper>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (<></>) &&
                        authenticationType === 'forgot-password' ?
                        (
                            // Forgot Password
                            <div className="authentication__signIn">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card__head">
                                                <div className="authentication__company-logo">
                                                    <img src="https://res.cloudinary.com/emacon-production/image/upload/v1623146015/Shikilia/Shikilia_Stores_Logo_zdzer3.png" alt="Company Logo"/>
                                                </div>
                                                <Wrapper position="center">
                                                    <h2>Forgot Password?</h2>
                                                </Wrapper>
                                                <Wrapper position="center">
                                                    <p>
                                                        Please enter the email you used to create the account, to reset your password.
                                                    </p>
                                                </Wrapper>
                                            </div>

                                            <div className="card__body">
                                                <div className="authentication__signIn-form">
                                                    <form>
                                                        <div className="authentication__signIn-input">
                                                            <input 
                                                                required
                                                                type="text" 
                                                                placeholder="Email Address"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="authentication__signIn-btn">
                                                            <Button
                                                                content={loading ? renderLoading() : 'Submit'}
                                                                width="fullWidth"
                                                            />
                                                        </div>
                                                    </form>

                                                    <div className="authentication__signUp-link">
                                                        <Wrapper position="center">
                                                            <a 
                                                                href="#"
                                                                onClick={() => setAuthenticationType('sign-in')}
                                                            >
                                                                {`Sign In`}
                                                            </a> 
                                                        </Wrapper>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (<></>)     
                    }
                </div>
            ): (
                <>
                    <Route
                        render={(props) => (
                            <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                                <Sidebar {...props}/>
                                <div className="layout__content">
                                    <TopNav/>
                                    <div className="layout__content-main">
                                        <ScrollToTop>
                                           <Routes/> 
                                        </ScrollToTop>
                                    </div>
                                </div>
                            </div>
                        )}
                    />
                </>
            )}
        </BrowserRouter>
        
    )
}

export default Layout
