import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';


function App() {
  return (
    <div className="App overflow-x-scroll">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;


