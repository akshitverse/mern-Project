// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import About from './components/About'
import BookAnBus from './components/BookAnBus'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignupSignin from './components/SignupSignin'
import Footer from './components/Footer'

function App() {
 return (
  <>
  <BrowserRouter>
  <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/bookanbus" element={<BookAnBus/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/signup-signin" element={<SignupSignin/>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
  </>
 )
}

export default App
