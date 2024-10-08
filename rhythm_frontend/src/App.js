import "./output.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./routes/login";
import RegisterComponent from "./routes/register";
// eslint-disable-next-line
import HomeComponent from "./routes/home";
import HelloComponent from "./routes/HelloComponent";
import { makeAuthenticatedGETRequest } from "./utils/serverHelpers";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadSongs from "./routes/UploadSongs";
import MyMusic from "./routes/MyMusic";
import SearchPage from "./routes/SearchPage";
import { useCookies } from "react-cookie";
import songContext from "./contexts/songContext";
import SinglePlaylistView from './routes/SinglePlaylistView';
import SpotifyCallback from "./routes/SpotifyCallback";
import SpotifyPlayer from "./routes/SpotifyPlayer";
import ForgotPasswordComponent from "./routes/forgotPasswordComponent";
import Library from './routes/Library';


function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(null);
  const [songData, setSongData] = useState([]);
  // eslint-disable-next-line
  const [cookie, setCookie] = useCookies(["token"]);
  const [playlists, setPlaylists] = useState([]);

  const updatePlaylists = async () => {
    const response = await makeAuthenticatedGETRequest("/playlist/get/me");
    setPlaylists(response);
  };

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token ? (
          // loggedIn routes
          <songContext.Provider
            value={{
              currentSong,
        setCurrentSong,
        soundPlayed,
        setSoundPlayed,
        isPaused,
        setIsPaused,
        songData,
        setSongData,
            }}
          >
            <Routes>
              <Route path="/" element={<HelloComponent />} />
              <Route path="/register" element={<RegisterComponent />} />
              <Route path="/forgot-password" element={<ForgotPasswordComponent />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/home" element={<LoggedInHomeComponent />} />
              <Route path="/forgot-password" element={<ForgotPasswordComponent />} />
              <Route path="/uploadSongs" element={<UploadSongs />} />
              <Route path="/myMusic" element={<MyMusic />} />
               <Route path="/playlist/:playlistId" element={<SinglePlaylistView />} />
              <Route path="/library" element={<Library playlists={playlists} updatePlaylists={updatePlaylists} />} />
              <Route path="/callback" element={<SpotifyCallback />} />
              <Route path="/spotify-player" element={<SpotifyPlayer />} />
              <Route path="/searchPage" element={<SearchPage />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </songContext.Provider>
        ) : (
          // loggedOut routes
          <Routes>
            {/*<Route path="/home" element={<HomeComponent />} />*/}
            <Route path="/" element={<HelloComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;