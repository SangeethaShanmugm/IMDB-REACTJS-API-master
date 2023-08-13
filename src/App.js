import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Movielist from './components/Movielist/Movielist';
import Movie from './Pages/Moviedetail/Movie';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route> 
          <Route path='movies/:type' element={<Movielist/>}></Route>
          <Route path='/*' element={<h1>404 Error</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
