import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index={true} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
