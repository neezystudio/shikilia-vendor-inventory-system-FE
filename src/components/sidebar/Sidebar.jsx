import React from 'react'
import './sidebar.css'
import Logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import { Link } from 'react-router-dom'

const SidebarItem = props => {
    const active = props.active ? "active" : ""

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}/>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

function Sidebar(props) {

    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
     

    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src="https://res.cloudinary.com/emacon-production/image/upload/v1623146015/Shikilia/Shikilia_Stores_Logo_zdzer3.png" alt="Company Logo"/>
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link key={index} to={item.route}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
