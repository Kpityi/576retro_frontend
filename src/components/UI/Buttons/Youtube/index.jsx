import './index.scss';
import { Link } from 'react-router-dom';

const YoutubeButton = ({ video }) => {
  return (
    <Link to={video} target="_blank">
      <button className="youtube-button">
        <div className="youtube-button__triangle"></div>
      </button>
    </Link>
  );
};

export default YoutubeButton;
