import React from 'react'
import Copyright from '../components/copyright/Copyright'
import ProfileComponent from '../components/profile/Profile'

function Profile() {
    return (
        <div>
            {/* Title */}
            <h2 className="page-header">
                Profile
            </h2>

            <ProfileComponent/>

            {/* Copyright */}
            <Copyright/>

        </div>
    )
}

export default Profile
