import './index.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../common/constants/environment';
import YoutubeButton from '../UI/Buttons/Youtube';
import BackButton from '../UI/Buttons/Back/indes';
import CommentBox from '../CommentBox';
import AddComment from '../AddComment';
import Snackbar from '../UI/Snackbar';

const GamePage = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState();
  const [severity, setSeverity] = useState();

  const fetchGame = async () => {
    try {
      const response = await fetch(`${API_URL}/game/${gameId}`);
      const data = await response.json();
      setGame(data);
    } catch (error) {
      console.error('fetch game:', error);
    }
  };

  useEffect(() => {
    fetchGame();
  }, [gameId]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        gameId: gameId,
        name: values.name,
        comment: values.comment,
      }),
    };
    const response = await fetch(`${API_URL}/game/${gameId}/comment`, options);
    console.log('response: ', response);
    if (response.status === 200) {
      setSnackbarMessage('Köszönjük véleményed!');
      setSeverity('success');
      setShowSnackbar(true);
      fetchGame();
    } else {
      setSnackbarMessage('Küldés sikertelen');
      setSeverity('error');
      setShowSnackbar(true);
    }
    setSubmitting(false);
    resetForm();
  };

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game-page">
      <Snackbar
        message={snackbarMessage}
        severity={severity}
        visibility={showSnackbar}
        reset={() => setShowSnackbar(false)}
      />
      <h1 className="game-page__title">{game.game.name} </h1>
      <div className="game-page__history-container">
        <div className="game-page__image-container">
          {game.images[0] ? (
            <img className="game-page__image" src={`/game_images/${game.images[0].image_name}`} />
          ) : null}
        </div>
        <div className="game-page__history-text-container">
          <div className="game-page__history-text">
            <h2 className="game-page__title">Történet</h2>
            {game.game_description.history}
          </div>
        </div>
      </div>
      <div className="game-page__gameplay-container">
        <div className="game-page__image-container">
          {game.images[1] ? (
            <img className="game-page__image" src={`/game_images/${game.images[1].image_name}`} />
          ) : null}
        </div>
        <div className="game-page__gameplay-text-container">
          <div className="gamepage__gameplay-text">
            <h2 className="game-page__title">Játékmenet</h2>
            {game.game_description.gameplay}
          </div>
        </div>
      </div>
      <div className="game-page__graphics-container">
        <div className="game-page__image-container">
          {game.images[2] ? (
            <img className="game-page__image" src={`/game_images/${game.images[2].image_name}`} />
          ) : null}
        </div>
        <div className="game-page__grapics-text-container">
          <div className="game-page__grapics-text">
            <h2 className="game-page__title">Grafika</h2>
            {game.game_description.graphics}
          </div>
        </div>
      </div>
      <div className="game-page__rank-container">
        <div className="game-page__image-container">
          {game.images[3] ? (
            <img className="game-page__image" src={`/game_images/${game.images[3].image_name}`} />
          ) : null}
        </div>
        <div className="game-page__rank-text-container">
          <div className="game-page__rank-text">
            <h2 className="game-page__title">Végitélet</h2>
            <p className="game-page__rank-percent">{game.game.rank}%</p>
          </div>
        </div>
      </div>
      <div className="game-page__system-container">
        <h2 className="game-page__title">Rendszerkövetelmény</h2>
        <div className="game-page__system">
          <div className="game-page__min">
            <table className="game-page__min-table">
              <thead>
                <tr>
                  <th colSpan="2" className="game-page__title">
                    minimum
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="game-page__table-cell">CPU:</td>
                  <td className="game-page__table-cell">{game.system_requirements.min_cpu}</td>
                </tr>
                <tr>
                  <td className="game-page__table-cell">GPU:</td>
                  <td className="game-page__table-cell">{game.system_requirements.min_gpu}</td>
                </tr>
                <tr>
                  <td className="game-page__table-cell">RAM:</td>
                  <td className="game-page__table-cell">{game.system_requirements.min_ram}</td>
                </tr>
                <tr>
                  <td className="game-page__table-cell">HDD:</td>
                  <td className="game-page__table-cell">{game.system_requirements.min_storage}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="game-page__rec">
            <table className="game-page__rec-table">
              <thead>
                <tr>
                  <th colSpan="2" className="game-page__title">
                    ajánlott
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="game-page__table-cell">CPU:</td>
                  <td className="game-page__table-cell">{game.system_requirements.rec_cpu}</td>
                </tr>
                <tr>
                  <td className="game-page__table-cell">GPU:</td>
                  <td className="game-page__table-cell">{game.system_requirements.rec_gpu}</td>
                </tr>
                <tr>
                  <td className="game-page__table-cell">RAM:</td>
                  <td className="game-page__table-cell">{game.system_requirements.rec_ram}</td>
                </tr>
                <tr>
                  <td className="game-page__table-cell">HDD:</td>
                  <td className="game-page__table-cell">{game.system_requirements.rec_storage}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="game-page__button-container">
        <BackButton />
        <YoutubeButton video={game.video_url} />
      </div>
      <div className="game-page__comment-container">
        {game.comments.map((comment) => {
          return <CommentBox key={comment.id} name={comment.user_name} comment={comment.comment} />;
        })}
      </div>
      <AddComment onSubmit={handleSubmit} />
    </div>
  );
};

export default GamePage;
