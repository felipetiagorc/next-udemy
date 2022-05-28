import { useThemeContext } from 'contexts/ThemeProvider'
import { getCookie } from 'cookies-next'

export default function Home() {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings
  } = useThemeContext()

  return (
    <>
      <div>Aqui seria a Home</div>
    </>
  )
}

export const getServerSideProps = ({ req, res }) => {
  const currentThemeColor = getCookie('colorMode', { req, res })
  const currentThemeMode = getCookie('themeMode', { req, res })
  if (currentThemeColor && currentThemeMode) {
    req.setCurrentColor(currentThemeColor)
    req.setCurrentMode(currentThemeMode)
  }
  return {
    props: {}
  }
}
