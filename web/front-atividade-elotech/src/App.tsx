import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './component/global/NavBar'
import Sobre from './pages/Sobre'
import Inicio from './pages/Inicio'
import Usuario from './pages/Usuario'
import Livro from './pages/Livro'
import Emprestimo from './pages/Emprestimo'




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
      <Route path = "/emprestimos" element={<Emprestimo/>}/>
    </Routes>
    </BrowserRouter>
   </div>

  )
}

export default App
