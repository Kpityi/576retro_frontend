import { Link } from 'react-router-dom';
import './index.scss';

const Page404 = () => {
  return (
    <div className="page-404">
      <div className="page-404__image-box">
        <div className="page-404__text-box">
          <h1 className="page-404__text-box-header">404</h1>
          <p>A keresett oldal nem található</p>
        </div>
        <div className="page-404__button-container">
          <Link to="/home" className="page-404__button">
            Vissza a kezdő oldalra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
