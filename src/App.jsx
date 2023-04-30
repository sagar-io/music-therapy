// import { useState } from 'react'
// import { MouseOut } from './components/MouseOut/'
import {Routes, Route} from 'react-router-dom'
import {Landing} from './components/LandingPage/'
import {Depression} from './components/Blogs/Depression'
import {Asd} from './components/Blogs/ASD'
import {Parkinson} from './components/Blogs/Parkinson'
import {Stroke} from './components/Blogs/Stroke'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/Depression' element={<Depression />}/>
      <Route path='/ASD' element={<Asd />}/>
      <Route path='/Parkinson' element={<Parkinson />}/>
      <Route path='/Stroke' element={<Stroke />}/>
    </Routes>
  )
}