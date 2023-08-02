import { Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Home from './components/Home';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:name" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
