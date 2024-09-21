import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/common/header';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import Page404 from './components/Page404';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/home" exact element={<Navigate replace to="/" />} />
          <Route path="/game/:gameId" element={<GamePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
