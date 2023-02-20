import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Feed from "../../components/Feed/Feed";
import FeedToggler from "../../components/FeedToggler/FeedToggler";
import Pagination from "../../components/Pagination/Pagination";
import PopularTags from "../../components/PopularTags/PopularTags";
import { useFetch } from "../../hooks/useFetch";

function GlobalFeed() {
  const [page, setPage] = useState(1);
  const [tag, setTag] = useState("");
  console.log("tag >>> ", tag);
  console.log("page >>> ", page);
  const limit = 50;
  const location = useLocation().pathname;
  console.log("location >>> ", location);
  const URL = `/articles${
    location === "/feed" ? "/feed" : ""
  }?limit=${limit}&offset=${(page - 1) * limit}${tag ? "&tag=" + tag : ""}`;
  const [{ isLoading, response, error }, createFetchOptions] = useFetch(URL);
  let countPages = 1;
  let paramsPage = +useParams().page;
  console.log("paramsPage >>> ", paramsPage);
  let paramsTag = useParams().tag;
  console.log("paramsTag >>> ", paramsTag);
  let articles = [];
  let feedList = [];

  useEffect(() => {
    createFetchOptions();
    if (paramsPage) setPage((page) => paramsPage);
    console.log("useParams >>> ", paramsPage);
  }, [createFetchOptions, paramsPage]);

  useEffect(() => {
    createFetchOptions();
    setTag((tag) => paramsTag);
    setPage(1);
    console.log("useParams >>> ", paramsTag);
  }, [paramsTag, createFetchOptions]);

  if (response) {
    countPages = Math.ceil(response.articlesCount / limit);
    if (page > countPages) setPage(countPages);
  }

  if (response) {
    articles = response.articles;
  }

  if (response) {
    articles = response.articles;
    if (tag) {
      articles = response.articles.filter((item) => item.tagList.includes(tag));
    }
    feedList = articles.map((item, ind) => {
      return <Feed key={ind} article={item} />;
    });
    console.log("countPages >>> ", countPages);
  }

  return (
    <div className="home-page">
      <div className="banner">
        <h1>Medium Clone</h1>
        <p>A place to share knowledge</p>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggler tagName={tag} page={page} />
            {isLoading && <div className="article-preview">Loading...</div>}
            {error && <div>Some error happened</div>}
            {!isLoading && response && (
              <>
                {feedList}
                {countPages > 1 ? (
                  <Pagination
                    url={tag ? `/tags/${tag}` : "/articles"}
                    // handler={handlerPagination}
                    currentPage={page}
                    maxPages={countPages}
                  />
                ) : null}
              </>
            )}
          </div>
          <div className="col-md-3">
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalFeed;
