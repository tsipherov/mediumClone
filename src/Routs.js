import { Routes, Route } from "react-router-dom";
import Article from "./pages/articles/Article";
import Auth from "./pages/Auth/Auth";
import GlobalFeed from "./pages/globalFeed/GlobalFeed";

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<GlobalFeed />} />
      <Route path="/article" element={<Article />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
    </Routes>
  );
};

export default Routs;
