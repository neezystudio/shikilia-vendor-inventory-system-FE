import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import './topnav.css'
import notifications from '../../assets/JsonData/notification.json'
import { Link } from 'react-router-dom'
import user_menu from '../../assets/JsonData/user_menus.json'
import ThemeMenu from '../thememenu/ThemeMenu'

const curr_user = {
    display_name: "Victor Githui",
    image: 'https://res.cloudinary.com/emacon-production/image/upload/v1627045050/Victor%20Githui%20Portfolio/DSC_4223_oypfrm.jpg'
}

const renderNotificationItems = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__rigth-user">
        <div className="topnav__rigth-user-image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__rigth-user-name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    <Link to={item.route} key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

function TopNav() {
    return (
        <div className="topnav">
            <div className="topnav__search">
                <input type="text" placeholder="Search here..." />
                <i className="bx bx-search"></i>
            </div>

            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* drop down here */}
                    <Dropdown
                        // icon="bx bx-user"
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnav__right-item">
                    {/* drop down here */}
                    <Dropdown
                        icon="bx bx-bell"
                        badge="12"
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItems(item, index)}
                        renderFooter={() => <Link to="/">View all</Link>}
                    />
                </div>
                <div className="topnav__right-item">
                    {/* theme settings */}
                    <ThemeMenu/>
                </div>
            </div>
        </div>
    )
}

export default TopNav
