import { Routes, Route, Link } from 'react-router-dom'
import ContactPage from '../ContactPage'
import AboutPage from '../AboutPage'
import HomePage from '../HomePage'
import ServicesPage from '../ServicesPage'
import NavBar from '../NavBar' 
import NotFoundPage from '../NotFoundPage'
import './styles.css'

function App() {
  return (
    <>
        < NavBar />

        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    </>
  )
}

export default App