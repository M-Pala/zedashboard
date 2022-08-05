import { createContext, useContext, useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [currMode, setCurrMode] = useState('light')
    const [currColor, setCurrColor] = useState('blue')

    const [currModeNode, setCurrModeNode] = useState('')
    const [currColorNode, setCurrColorNode] = useState('')

    return (
        <ThemeContext.Provider value={{currMode, setCurrMode, currColor, setCurrColor, currModeNode, setCurrModeNode, currColorNode, setCurrColorNode}}>{children}</ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}