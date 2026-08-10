import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'

function App() {
  return(
    <>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<PageTransition><Home/></PageTransition>}/>
        <Route path='/projects' element={<PageTransition><Projects/></PageTransition>}/>
        <Route path='/about' element={<PageTransition><About/></PageTransition>}/>
        <Route path='/contact' element={<PageTransition><Contact/></PageTransition>}/>
        <Route path='/services' element={<PageTransition><Services/></PageTransition>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
