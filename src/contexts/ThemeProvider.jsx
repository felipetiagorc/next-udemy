import { setCookies } from 'cookies-next'
import React, { createContext, useContext, useState } from 'react'
const ThemeContext = createContext()

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
}

export const ThemeProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined)
  const [currentColor, setCurrentColor] = useState('#03C9D7')
  const [currentMode, setCurrentMode] = useState('Light')
  const [themeSettings, setThemeSettings] = useState(false)
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState)

  const setMode = (e) => {
    setCurrentMode(e.target.value)
    setCookies('themeMode', e.target.value)
  }

  const setColor = (color) => {
    setCurrentColor(color)
    setCookies('colorMode', color)
  }

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true })

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        screenSize,
        setScreenSize,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setActiveMenu,
        setCurrentColor,
        setCurrentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
