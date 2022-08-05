import React, {useEffect, useState, useRef} from 'react'

import {useThemeContext} from '../../context/theme_context'
import { mode_settings } from '../../assets/ThemeData/mode_settings'
import { color_settings } from '../../assets/ThemeData/color_settings'

import './thememenu.css'




const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e)=>{
        //user clicks toggle
        if(toggle_ref.current && toggle_ref.current.contains(e.target)){
            content_ref.current.classList.toggle('active')
        }
        else{
            //user clicks outside toggle and content
            if(content_ref.current && !content_ref.current.contains(e.target)){
                content_ref.current.classList.remove('active')
            }
        }
    })
}

const ThemeMenu = () => {

    const {currMode, setCurrMode, currColor, setCurrColor, currModeNode, setCurrModeNode, currColorNode, setCurrColorNode} = useThemeContext()
    const menu_ref = useRef(null)
    const menu_toggle_ref = useRef(null)

    clickOutsideRef(menu_ref, menu_toggle_ref)

    const setActiveMenu = () => menu_ref.current.classList.add('active')
    const closeMenu = () => menu_ref.current.classList.remove('active')


    

    useEffect(()=>{
        localStorage.setItem('themeMode', currModeNode.class)
        localStorage.setItem('colorMode', currColorNode.class)
    },[currMode, currColor])

  return (
    <div>
        <button ref={menu_toggle_ref} className="dropdown__toggle" onClick={()=>setActiveMenu()}>
            <i className='bx bx-palette'></i>
        </button>
        <div ref={menu_ref} className="theme-menu">
            <h4>Theme Setting</h4>
            <button className="theme-menu__close" onClick={()=>closeMenu()}>
                <i className="bx bx-x"></i>
            </button>
            
            <div className="theme-menu__select">
                <span>Chose Mode</span>
                <ul className="mode-list">
                    {
                        mode_settings.map((item, index)=>(
                            <li key={index}  onClick={()=>{
                                    setCurrMode(item.id)
                                    setCurrModeNode(item)
                                }}>
                                <div className={`mode-list__color ${item.background} ${item.id === currMode ? 'active' : ''}`}>
                                    <i className="bx bx-check"></i>
                                </div>
                                <span>{item.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="theme-menu__select">
                <span>Chose Color</span>
                <ul className="mode-list">
                    {
                        color_settings.map((item, index)=>(
                            <li key={index}  onClick={()=>{
                                    setCurrColor(item.id)
                                    setCurrColorNode(item)
                                    }}>
                                <div className={`mode-list__color ${item.background} ${item.id === currColor ? 'active' : ''}`}>
                                    <i className="bx bx-check"></i>
                                </div>
                                <span>{item.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ThemeMenu
