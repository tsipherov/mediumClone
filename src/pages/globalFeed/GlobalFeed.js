import { useEffect, useState } from "react";
import Feed from "../../components/Feed/Feed";
import Pagination from "../../components/Pagination/Pagination";
import { useFetch } from "../../hooks/useFetch";

function GlobalFeed() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const URL = `/articles?limit=${limit}&offset=${(page - 1) * limit}`;
  const [{ isLoading, response, error }, createFetchOptions] = useFetch(URL);
  let countPages = 1;

  useEffect(() => {
    createFetchOptions();
  }, [createFetchOptions, page]);

  if (response) countPages = Math.ceil(response.articlesCount / limit);

  const feedList = response
    ? response.articles.map((item) => {
        return <Feed key={item.title} article={item} />;
      })
    : null;
  const handlerPagination = (currentPage) => {
    setPage((page) => currentPage);
    console.log("page >> ", page);
  };

  return (
    <div className="home-page">
      <div className="banner">
        <h1>Medium Clone</h1>
        <p>A place to share knowledge</p>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {isLoading && <div className="article-preview">Loading...</div>}
            {error && <div>Some error happened</div>}
            {!isLoading && response && (
              <>
                {feedList}
                <Pagination
                  handler={handlerPagination}
                  currentPage={page}
                  maxPages={countPages}
                />
              </>
            )}
          </div>
          <div className="col-md-3">Popular tags</div>
        </div>
      </div>
    </div>
  );
}

export default GlobalFeed;
