import { getCookie } from 'cookies-next'

export default function Home() {
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
