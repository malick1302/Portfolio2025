import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx' 
import Navbar from './pages/Navbar.jsx'
import Competences from './pages/competences.jsx'
import Projects from './pages/projects.jsx'
import Contacts from './pages/contacts.jsx'
import EmailForm from './components/EmailForm.jsx'
import LogoContact from './components/logoContact.jsx'
import ThreeScene from './components/threeScene.jsx'
import LogoCompet from './components/LogoCompet.jsx'
import Collection from './components/collection.jsx'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/threeScene" element={<ThreeScene />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path='/EmailForm' element={<EmailForm />} />
          <Route path='/LogoContact' element={<LogoContact />} />
          <Route path='/LogoCompet' element={<LogoCompet />} />
        </Routes>
      
    </Router>
  )
}

export default App
