import React from 'react'
import "./index.css"
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Edit_Meme from './components/Edit_Meme'


const App = () => {
  return (
    <div>
      <h1 className="text-center text-2xl sm:text-5xl font-semibold mt-5">
        Meme Generator App
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meme" element={<Edit_Meme />} />
      </Routes>
    </div>
  );
}

export default App