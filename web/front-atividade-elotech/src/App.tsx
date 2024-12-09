import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import NavBar from './component/NavBar'
import Sobre from './pages/Sobre'
import Inicio from './pages/Inicio'
import Usuario from './pages/Usuario'
import Livro from './pages/Livro'
import Locacao from './pages/Locacao'



function App() {
  
  return (

   <div className='App'>
    <BrowserRouter>
    <NavBar/>
    <h1>Biblioteca Elotech</h1>
    <Routes>
      <Route path = "/" element={<Inicio/>}/>
      <Route path = "/sobre" element={<Sobre/>}/>
      <Route path = "/usuarios" element={<Usuario/>}/>
      <Route path = "/livros" element={<Livro/>}/>
      <Route path = "/locacoes" element={<Locacao/>}/>
    </Routes>
    </BrowserRouter>
   </div>

  )
}

export default App
