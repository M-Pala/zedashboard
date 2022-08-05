import React from 'react'
import './sidebar.css'

import  logo from '../../assets/images/favicon.png'

import sidebar_items from '../../assets/JsonData/sidebar-routes.json'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'


const SidebarItem = props => {
  const active = props.active ? 'active' : ''

  return(
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  )
}


const Sidebar = (props) => {

  const location = useLocation()
  // console.log(params);

  const activeItem = sidebar_items.findIndex(item=>item.route === location.pathname)
  // const activeItem = 1
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" />
      </div>
      {
        sidebar_items.map((item,index)=>(
          <Link to={item.route} key={index}>
            <SidebarItem title={item.display_name} icon={item.icon} active={index === activeItem}/>
          </Link>
        ))
      }
    </div>
  )
}

export default Sidebar

