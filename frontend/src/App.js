import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Allnews from './Components/AllNews/Allnews';

import Contact from './Components/Contact/Contact';
import DetailsNews from './Components/Home/DetailsNews/DetailsNews';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Error from './Components/Shared/Error/Error';
import Signup from './Components/SignUp/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='home/:newsId' element={<DetailsNews/>}/>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='allnews' element={<Allnews />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter >

    </div >
  );
}

export default App;
