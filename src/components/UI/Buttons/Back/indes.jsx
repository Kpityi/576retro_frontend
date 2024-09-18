import './index.scss';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Link to="/">
      <button className="back-button">
        <div className="back-button__arrow-container">
          <div className="back-button__triangle"></div>
          <div className="back-button__rectangle"></div>
        </div>
      </button>
    </Link>
  );
};

export default BackButton;
