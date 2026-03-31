import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Main from "./pages/Main"
import ContactPage from "./pages/contact/ContactPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} />
      </Routes>
    </>
  )
}

export default App
