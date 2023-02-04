import { Routes, Route } from "react-router-dom";
import Article from "./pages/articles/Article";
import Page2 from "./pages/articles/Page2";
import GlobalFeed from "./pages/globalFeed/GlobalFeed";

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<GlobalFeed />} />
      <Route path="/article" element={<Article />} />
      <Route path="/page/*" element={<Page2 />} />
    </Routes>
  );
};

export default Routs;
