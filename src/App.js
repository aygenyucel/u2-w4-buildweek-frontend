import "./App.css";
import ProfilePage from "./components/profilePage/ProfilePage";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/footer";
import NavBar from "./components/NavBar/NabVabarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedPage from "./components/FeedPageFiles/FeedPage/FeedMainPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/profile/me" element={<ProfilePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
