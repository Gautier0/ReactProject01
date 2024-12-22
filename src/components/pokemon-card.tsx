import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';
  
type Props = {
  pokemon: Pokemon
  borderColor?: string
};
  
const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor = '#009688'}) => {
  const [color, setColor] = useState<string>(); // Etat pour stocker la couleur actuel de la bordure

  const showBorder = () => {
    setColor(borderColor); // Quand les conditions de showBorder sont réunis, couleur par défaut #009688
  }

  const hideBorder = () => {
    setColor('#f5f5f5'); // Quand les conditions de hideBorder sont réunis, couleur grise
  }
  
  return (
    <div className="col s6 m4" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
      <div className="card horizontal" style={{borderColor : color}}>
        <div className="card-image"> 
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p><small>{pokemon.created.toString()}</small></p>
          </div>
        </div>
      </div> 
    </div>
  );
}
  
export default PokemonCard;