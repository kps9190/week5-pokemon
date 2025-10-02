import { Routes, Route } from 'react-router-dom';
import PokemonList from './pages/PokemonList.tsx'
import PokemonDetail from './pages/PokemonDetail.tsx'
// import './App.css'

function App() {
    return (
        <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
    )
}

export default App


