import React, {useState, useEffect} from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
import PokemonList from './pages/pokemon-list';

const App: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return (
        <PokemonList />
    )
}

export default App;