

import React, {useEffect, useState} from 'react'

import './layout.css'

import Sidebar from '../Sidebar/Sidebar'
import TopNav from '../TopNav/TopNav'

import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom'

import Dashboard from '../../pages/Dashboard'
import Customers from '../../pages/Customers'
import { useThemeContext } from '../../context/theme_context'

const Layout = () => {

    // const themeReducer = useSelector(state => state.ThemeReducer)
    const {currModeNode, currColorNode} = useThemeContext()
    // const dispatch = useDispatch()

    const [themeClass, setThemeClass] = useState(localStorage.getItem(currModeNode.class))
    const [colorClass, setColorClass] = useState(localStorage.getItem(currColorNode.class))

    useEffect(()=>{
      setThemeClass(localStorage.getItem('themeMode'))
      setColorClass(localStorage.getItem('colorMode'))
    },[currModeNode,currColorNode])

    return (        
          <BrowserRouter>
            <div className={`layout ${themeClass} ${colorClass}`}>
              <Sidebar/>
              <div className="layout__content">
                <TopNav/>
                <div className="layout__content-main">
                  <RouterRoutes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/customers' element={<Customers/>}/>
                  </RouterRoutes>
                </div>
              </div>
            </div>
          </BrowserRouter>
        )
    
}

export default Layout