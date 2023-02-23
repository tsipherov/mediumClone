import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ErrorIndicator from "../../components/ErrorIndicator/ErrorIndicator";
import Spinner from "../../components/Spinner/Spinner";
import TagList from "../../components/TagList/TagList";
import { UserContext } from "../../contexts/userContext";
import { useFetch } from "../../hooks/useFetch";

function Article(props) {
  // console.log("props >>> ", props);
  const navigate = useNavigate();
  const [userState] = useContext(UserContext);
  const slag = useParams().slag;
  const URL = `/articles/${slag}`;

  const [{ isLoading, response, error }, createFetchOptions] = useFetch(URL);
  const [isDeleting, setIsDeleting] = useState(false);
  const isAuthor = () => {
    if (!userState.isLogedIn || !response) {
      // console.log("userState >>> ", userState);
      return false;
    }

    return userState.currentUser.username === response.article.author.username;
  };

  const deleteArticle = () => {
    if (!isAuthor())
      throw new Error("An article can only be deleted by its author!");
    createFetchOptions({
      method: "DELETE",
    });
    setIsDeleting(true);
  };

  if (isDeleting && !error) {
    navigate("/");
  }

  useEffect(() => {
    createFetchOptions();
  }, [createFetchOptions]);

  return (
    <div className="article-page">
      <div className="banner">
        {!isLoading && response && (
          <div className="container">
            <h1>{response.article.title}</h1>
            <div className="article-meta">
              <Link to={`/profiles/${response.article.author.username}`}>
                <img src={response.article.author.image} alt="" />
              </Link>
              <div className="info mx-3">
                <Link
                  to={`/profiles/${response.article.author.username}`}
                  className="fw-bold fs-5"
                >
                  {response.article.author.username}
                </Link>
                <span className="date mt-1">{response.article.createdAt}</span>
              </div>
              {isAuthor() && (
                <span>
                  <Link
                    to={`/article/${slag}/edit`}
                    className="btn btn-outline-secondary btn-sm mx-3"
                  >
                    <i className="ion-edit"></i>
                    &nbsp; Edit Article
                  </Link>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={deleteArticle}
                  >
                    <i className="ion-trash-a"></i>
                    &nbsp; Delete Article
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="container page">
        {isLoading && <Spinner />}
        {error && <ErrorIndicator />}
        {!isLoading && response && (
          <div className="row article-content">
            <div>
              <p>{response.article.body}</p>
            </div>
            <TagList tags={response.article.tagList} />
          </div>
        )}
        <hr />
      </div>
    </div>
  );
}

export default Article;
