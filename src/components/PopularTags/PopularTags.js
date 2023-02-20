import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

const PopularTags = () => {
  const [{ isLoading, response, error }, createFetchOptions] =
    useFetch("/tags");

  useEffect(() => {
    createFetchOptions();
  }, [createFetchOptions]);

  if (error) {
    return <ErrorIndicator />;
  }

  if (isLoading || !response) {
    return <Spinner />;
  }

  return (
    <div className="sidebar">
      <p>Popular tags</p>
      <div className="tag-list">
        {response.tags.map((tag) => (
          <Link
            to={`/tags/${tag}/1`}
            className="tag-default tag-pill"
            key={tag}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
