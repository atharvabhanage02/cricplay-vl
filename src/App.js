import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Explore } from "./Pages/Explore/Explore";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";
import { SingleVideoPage } from "./Pages/SingleVideoPage/SingleVideoPage";
import { WatchLaterPage } from "./Pages/Watch-Later-Page/WatchLaterPage";
import { RequiresAuth } from "./Components/RequiresAuth";
import Mockman from "mockman-js";
import { LikePage } from "./Pages/Like-Page/LikePage";
import { History } from "./Pages/History/History";
import { Playlist } from "./Pages/Playlist/Playlist";
import { PlaylistSinglePage } from "./Pages/PlaylistSinglePage/PlaylistSinglePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route path="/" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />
        <Route
          path="/watch-later"
          element={
            <RequiresAuth>
              <WatchLaterPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/liked"
          element={
            <RequiresAuth>
              <LikePage />
            </RequiresAuth>
          }
        />
        <Route path="/play/:videoId" element={<SingleVideoPage />} />
        <Route
          path="/playlist"
          element={
            <RequiresAuth>
              <Playlist />
            </RequiresAuth>
          }
        />
        <Route path="/playlist/:playlistId" element={<PlaylistSinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
