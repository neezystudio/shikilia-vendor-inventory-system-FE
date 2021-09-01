import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import Button from '../button/Button';
import Wrapper from '../wrapper/Wrapper';
import './profile.css'

function Profile() {
    const [companyLogo, setCompanyLogo] = useState('https://res.cloudinary.com/emacon-production/image/upload/v1623146015/Shikilia/Shikilia_Stores_Logo_zdzer3.png');
    const [companyName, setCompanyName] = useState("Business Name");
    const [name, setName] = useState();
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [businessRegestrationCode, setBusinessRegestrationCode] = useState();
    const [initialPassword, setInitialPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmNewPassword, setConfirmNewPassword] = useState();
    const [loading, setLoading] = useState(false);

    const [initialPasswordErr, setInitialPasswordErr] = useState(false);
    const [confirmNewPasswordErr, setConfirmPasswordErr] = useState(false);

    useEffect(() => {
        if ( newPassword !== confirmNewPassword ) {
            setConfirmPasswordErr(true);
        } else {
            setConfirmPasswordErr(false);
        }
    }, [confirmNewPassword])

    const renderLoading = () => (
        <Spinner animation="border" variant="light"/>
    )

    return (
        <div className={`profile`}>
            <div className="card">
                {/* Bussiness Logo */}
                <div className="profile__businessLogo">
                    <img src={companyLogo} alt={companyName}/>
                </div>

                {/* Business Name */}
                <div className="profile__businessName">
                    <h3>{companyName}</h3>
                </div>

                {/* Profile Form */}
                <div className="card__body">
                    <div className="profile__form">
                        <form>
                            <div className="">
                                Upload Logo Image Input
                            </div>

                            <label htmlFor="" className="profile__input-Label">Full Name</label>
                            <div className="profile__form-input">
                                <input 
                                    required
                                    type="text" 
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <label htmlFor="" className="profile__input-Label">Username</label>
                            <div className="profile__form-input">
                                <input 
                                    required
                                    type="text" 
                                    placeholder="Username"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>

                            <label htmlFor="" className="profile__input-Label">Email Address</label>
                            <div className="profile__form-input">
                                <input 
                                    required
                                    type="email" 
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <label htmlFor="" className="profile__input-Label">Business Name</label>
                            <div className="profile__form-input">
                                <input 
                                    required
                                    type="text" 
                                    placeholder="Business Name"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                            </div>

                            <label htmlFor="" className="profile__input-Label">Business Registration Code</label>
                            <div className="profile__form-input">
                                <input 
                                    required
                                    type="text" 
                                    placeholder="Business Regestration Number"
                                    value={businessRegestrationCode}
                                    onChange={(e) => setBusinessRegestrationCode(e.target.value)}
                                />
                            </div>

                            <label htmlFor="" className={`profile__input-Label ${initialPasswordErr ? 'profile__error' : ''}`}>{initialPasswordErr ? "Incorrect Password" : "Current Password"}</label>
                            <div className="profile__form-input">
                                <input 
                                    required
                                    type="Password"
                                    placeholder="Current Password"
                                    value={initialPassword}
                                    onChange={(e) => setInitialPassword(e.target.value)}
                                />
                            </div>

                            <label htmlFor="" className="profile__input-Label">New Password</label>
                            <div className="profile__form-input">
                                <input 
                                    required
                                    type="Password"
                                    placeholder="New Password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>

                            <label htmlFor="" className={`profile__input-Label ${confirmNewPasswordErr ? 'profile__error' : ''}`}>{confirmNewPasswordErr ? "Passsword doesn't match the new password" : "Confirm New Password"}</label>
                            <div className="profile__form-input">
                                <input 
                                    required
                                    type="password"
                                    placeholder="Confirm New Password"
                                    value={confirmNewPassword}
                                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                                />
                            </div>

                            <div className="profile__form-btn">
                                <Button
                                    content={loading ? renderLoading() : 'Update Profile'}
                                    width="fullWidth"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
