import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import ContactPage from "./pages/contact/ContactPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/kontakt" element={<ContactPage />} />
    </Routes>
  )
}

export default App
