import { Route, Routes } from 'react-router-dom'
import './styles/myBG.css';

//components
import NavBar from './components/NavBar';

import Crud from './pages/Crud';
import Home from './pages/Home';
function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crud" element={<Crud />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
