import { Routes, Route } from "react-router-dom";
import AllMeetUpsPage from "./components/pages/AllMeetUp";
import FavoritesPage from "./components/pages/Favorites";
import NewMeetUpsPage from "./components/pages/NewMeetUp";
import Layout from "./components/layout/layout";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetUpsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/new-meet-ups" element={<NewMeetUpsPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
