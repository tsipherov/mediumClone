import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Feed from "../../components/Feed/Feed";
import Pagination from "../../components/Pagination/Pagination";
import PopularTags from "../../components/PopularTags/PopularTags";
import { useFetch } from "../../hooks/useFetch";

function GlobalFeed() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const URL = `/articles?limit=${limit}&offset=${(page - 1) * limit}`;
  const [{ isLoading, response, error }, createFetchOptions] = useFetch(URL);
  let countPages = 1;
  let paramsPage = +useParams().page;

  useEffect(() => {
    createFetchOptions();
    setPage((page) => paramsPage);
    console.log("useParams >>> ", paramsPage);
  }, [createFetchOptions, paramsPage]);

  if (response) countPages = Math.ceil(response.articlesCount / limit);

  const feedList = response
    ? response.articles.map((item, ind) => {
        return <Feed key={ind} article={item} />;
      })
    : null;
  // const handlerPagination = (currentPage) => {
  //   setPage((page) => currentPage);
  //   console.log("page >> ", page);
  // };

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
                  url={"/articles"}
                  // handler={handlerPagination}
                  currentPage={page}
                  maxPages={countPages}
                />
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
