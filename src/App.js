import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Recipe from './pages/Recipe/Recipe';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route index path="/*" element={<Home />} />
        <Route path="/recipe-page" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
