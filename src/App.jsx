import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import WatchList from './components/WatchList'
import Movies from './components/Movies'
import WatchListContextWrapper from './context/WatchListContext'
import Copyright from './components/Copyright'
import Counter from './components/Counter'



function App() {

  return (
    <>
      <Navbar/>
      
      <WatchListContextWrapper>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/watchlist" element={<WatchList/>}/>
          <Route path="/movies" element={<Movies/>}/>
        </Routes>
      </WatchListContextWrapper>
      {/* <Counter/> */}
      <Copyright/>
    </>
  )
}

export default App
