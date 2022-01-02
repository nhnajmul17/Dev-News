import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import PythonNews from './Components/AllNews/PythonNews/PythonNews';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <h1>Welcome to News</h1>

          <ul>
            <Link to='/home'> <li>Home</li> </Link>
            <Link to='/pythonnews'>  <li>Python News</li> </Link>
            <Link to='/login'><li>Login</li> </Link>
          </ul>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='pythonnews' element={<PythonNews />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
