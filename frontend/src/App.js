import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Allnews from "./Components/AllNews/Allnews";

import Contact from "./Components/Contact/Contact";
import Dashbords from "./Components/Dashbords/Dashbords";
import DetailsNews from "./Components/Home/DetailsNews/DetailsNews";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Error from "./Components/Shared/Error/Error";
import Signup from "./Components/SignUp/Signup";

import ManageNewses from "./Components/Dashbords/ManageNewses/ManageNewses";
import PendingNewses from "./Components/Dashbords/PendingNewses/PendingNewses";
import UserAnalytics from "./Components/Dashbords/UserAnalytics/UserAnalytics";
import MakeAdmin from "./Components/Dashbords/MakeAdmin/MakeAdmin";
import PublishNews from "./Components/Dashbords/PublishNews/PublishNews";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="home/:newsId" element={<DetailsNews />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="allnews" element={<Allnews />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="dashboard" element={<Dashbords />}>
            <Route path="manage-news" element={<ManageNewses />} />
            <Route path="publish-news" element={<PublishNews />} />
            <Route path="make-admin" element={<MakeAdmin />} />
            <Route
              path="panding-news"
              element={<PendingNewses />}
            />
            <Route
              path="user-analytics"
              element={<UserAnalytics />}
            />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
