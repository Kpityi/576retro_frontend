import './index.scss';
import { useNavigate } from 'react-router-dom';

const GameCard = ({ id, name, image, description, release_year, rank, rest }) => {
  const navigate = useNavigate();

  return (
    <div className="game-card">
      <div className="game-card__year">{release_year}</div>
      <div className="game-card__container">
        <div className="game-card__title">
          <div className="game-card__name">
            <h2>{name}</h2>
          </div>
          <div className="game-card__rank">
            <h2>Értékelés: {rank}%</h2>
          </div>
        </div>
        <div className="game-card__card">
          <div className="game-card__image-container">
            {image ? <img className="game-card__image" src={`./${image}`} alt={`${name} cover image`} /> : null}
          </div>
          <div className="game-card__text-container">
            <div className="game-card__description">{description}</div>
            <div className="game-card__navigation">
              <button
                className="game-card__navigation-button"
                onClick={() => {
                  navigate(`/game/${id}`);
                }}
              >
                több &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameCard;
