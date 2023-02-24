import { Routes, Route, Navigate } from "react-router-dom";
import Article from "./pages/Article/Article";
import Auth from "./pages/Auth/Auth";
import CreateArticle from "./pages/CreateArticle/CreateArticle";
import EditArticle from "./pages/EditArticle/EditArticle";
import GlobalFeed from "./pages/globalFeed/GlobalFeed";
import Settings from "./pages/Settings/Settings";
import UserProfile from "./pages/UserProfile/UserProfile";

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/articles/1" />} />
      <Route path="/feed" element={<GlobalFeed />} />
      <Route path="/articles/:page" element={<GlobalFeed />} />
      <Route path="/tags/:tag" element={<GlobalFeed />} />
      <Route path="/tags/:tag/:page" element={<GlobalFeed />} />
      <Route path="/article/new" element={<CreateArticle />} />
      <Route path="/article/:slag" element={<Article />} />
      <Route path="/article/:slag/edit" element={<EditArticle />} />
      <Route path="/profiles/:user" element={<UserProfile />} />
      <Route path="/profiles/:user/favorites" element={<UserProfile />} />
      <Route path="/profile/:user/favorites/:page" element={<UserProfile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/register" element={<Auth />} />
    </Routes>
  );
};

export default Routs;
