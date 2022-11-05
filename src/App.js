import React from 'react'

import { Main } from './main/Main'
import {Contact} from './contact/Contact'
import { Routes, Route} from 'react-router-dom'


const App = () => {
  return (
      <>
      <Routes>
          <Route path='/' element={<Main/>} />
    
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      
      </>
    );
}

export default App
