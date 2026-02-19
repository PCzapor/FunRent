import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SkipToContent from './components/SkipToContent'
import StructuredData from './components/StructuredData'
import MouseBalls from './components/MouseBalls'
import Home from './pages/Home'
import Katalog from './pages/Catalog'
import ONas from './pages/About'
import Kontakt from './pages/Contact'
import Galeria from './pages/Galery'
import './App.css'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app">
          <MouseBalls />
          <StructuredData />
          <SkipToContent />
          <header>
            <Navbar />
          </header>
          <main id="main-content" className="main-content" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/katalog" element={<Katalog />} />
              <Route path="/o-nas" element={<ONas />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/galeria/:category" element={<Galeria />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
