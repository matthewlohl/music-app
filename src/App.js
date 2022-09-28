
import React from 'react'
import { Header, Footer } from './layout'
import { Home , Artists, About, NotFound} from './pages'

import { Routes, Route } from 'react-router-dom'



import './App.css'

function App() {


  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='artists' element={<Artists />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>

    <Footer />
    </>
  );
}

export default App;
