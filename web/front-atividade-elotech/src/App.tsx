import './App.css'
import { Routes, Route} from 'react-router-dom'

import NavBar from './component/global/NavBar'
import Sobre from './pages/Sobre'
import Inicio from './pages/Inicio'
import Cliente from './pages/Cliente'
import Livro from './pages/Livro'
import Emprestimo from './pages/Emprestimo'




function App() {
  
  return (

   <div className='App'>
    <NavBar/>
    <h1>Biblioteca Elotech</h1>
    <Routes>
      <Route path = "/" element={<Inicio/>}/>
      <Route path = "/sobre" element={<Sobre/>}/>
      <Route path = "/clientes" element={<Cliente/>}/>  
      <Route path = "/livros" element={<Livro/>}/>
      <Route path = "/emprestimos" element={<Emprestimo/>}/>
    </Routes>
   </div>

  )
}

export default App
