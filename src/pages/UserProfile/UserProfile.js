import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Feed from "../../components/Feed/Feed";
import FeedToggler from "../../components/FeedToggler/FeedToggler";
import Pagination from "../../components/Pagination/Pagination";
import PopularTags from "../../components/PopularTags/PopularTags";
import Spinner from "../../components/Spinner/Spinner";
import UserFeedsToggler from "../../components/UserFeedsToggler/UserFeedsToggler";
import { UserContext } from "../../contexts/userContext";
import { useFetch } from "../../hooks/useFetch";

const UserProfile = () => {
  const location = useLocation().pathname;
  let isFavorited = location.includes("favorites");

  const [page, setPage] = useState(1);
  // console.log("page >>> ", page);
  const limit = 10;
  let paramsPage = +useParams().page;
  let paramsUser = useParams().user;
  //   console.log("paramsUser >>> ", paramsUser);
  const userProfileURL = `/profiles/${paramsUser}`;
  const [
    { response: currentUserResponse, error: currentUserError },
    currentUserOptions,
  ] = useFetch(userProfileURL);
  const userArticlesURL = `/articles?${
    isFavorited ? "favorited" : "author"
  }=${paramsUser}&limit=${limit}&offset=${(page - 1) * limit}`;
  const [{ isLoading, response, error }, createFetchOptions] =
    useFetch(userArticlesURL);

  const [currentUser, setCurrentUser] = useState({});
  let countPages = 1;
  //   console.log("isFavorited >>> ", isFavorited);
  let feedList = [];

  useEffect(() => {
    currentUserOptions();
  }, [currentUserOptions, location]);

  //   if (currentUserResponse) {
  //     setCurrentUser(currentUserResponse?.profile);
  //     console.log("currentUserResponse >>> ", currentUser);
  //   }

  useEffect(() => {
    createFetchOptions();
    //     // if (paramsPage) setPage((page) => paramsPage);
    //     setPage(1);
    //     // console.log("useParams >>> ", paramsTag);
  }, [createFetchOptions, location]);

  //   if (response) {
  //     countPages = Math.ceil(response.articlesCount / limit);
  //     if (page > countPages) setPage(countPages);
  //   }

  if (response) {
    feedList = response?.articles.map((item, ind) => {
      return <Feed key={ind} article={item} />;
    });

    if (feedList.length == 0) feedList = <h4>No articles are here... yet.</h4>;
  }

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img
                className="user-img"
                alt=""
                src={currentUserResponse?.profile.image}
              />
              <h4>{currentUserResponse?.profile.username}</h4>
              <p>{currentUserResponse?.profile.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <UserFeedsToggler page={page} />
            {isLoading && <Spinner />}
            {error && <div>Some error happened</div>}
            {!isLoading && response && (
              <>
                {feedList}
                {countPages > 1 ? (
                  <Pagination
                    url={``}
                    currentPage={page}
                    maxPages={countPages}
                    currentUserName={paramsUser}
                  />
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
