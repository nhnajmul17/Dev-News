import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import JavascriptNews from './Components/AllNews/JavascriptNews/JavascriptNews';
import PhpNews from './Components/AllNews/PhpNews/PhpNews';
import PythonNews from './Components/AllNews/PythonNews/PythonNews';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Error from './Components/Shared/Error/Error';
import Header from './Components/Shared/Header/Header';
import Signup from './Components/SignUp/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='pythonnews' element={<PythonNews />} />
          <Route path='javanews' element={<JavascriptNews />} />
          <Route path='phpnews' element={<PhpNews />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter >

    </div >
  );
}

export default App;
