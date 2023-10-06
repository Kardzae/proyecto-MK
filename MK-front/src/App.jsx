import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Modo from './Componentes/Modojuego'
import Reinoselector from './Componentes/ReinoSelector';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Modo/>}></Route>
        <Route path='/seleccionar' element={<Reinoselector/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
