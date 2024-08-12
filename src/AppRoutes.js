
import AllPokemon from './AllPokemon';
// import './App.css';
// import AppRoutes from './AppRoutes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SinglePokemon from './SinglePokemon';
// import Navbar from './Navbar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AllPokemon />} />
        <Route path='/pokemon/:id' element={<SinglePokemon />} />
      </Routes>
    </Router>
  )
}

export default App;
