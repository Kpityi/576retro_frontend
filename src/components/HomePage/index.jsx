import { useState } from 'react';
import './index.scss';
import { useEffect } from 'react';
import GameCard from '../GameCard';
import { API_URL } from '../../common/constants/environment';

const HomePage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`${API_URL}/games`);
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('fetch games:', error);
      }
    };
    fetchGames();
  }, []);

  return (
    <div className="home-page">
      {games
        ? games.map((game) => {
            return (
              <GameCard
                key={game.id}
                id={game.id}
                name={game.name}
                image={game.main_image}
                description={game.description}
                release_year={game.release_year}
                rank={game.rank}
              />
            );
          })
        : null}
    </div>
  );
};

export default HomePage;
