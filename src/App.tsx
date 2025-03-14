import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Game } from './pages/Game';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index={true} element={<Home />} />
          <Route path='game' element={<Game />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
