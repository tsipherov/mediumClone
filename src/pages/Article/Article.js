import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ErrorIndicator from "../../components/ErrorIndicator/ErrorIndicator";
import Spinner from "../../components/Spinner/Spinner";
import TagList from "../../components/TagList/TagList";
import { useFetch } from "../../hooks/useFetch";

function Article(props) {
  console.log("props >>> ", props);
  const slag = useParams().slag;
  const URL = `/articles/${slag}`;
  const [{ isLoading, response, error }, createFetchOptions] = useFetch(URL);

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
              <div className="info">
                <Link to={`/profiles/${response.article.author.username}`}>
                  {response.article.author.username}
                </Link>
                <span className="date">{response.article.createdAt}</span>
              </div>
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
