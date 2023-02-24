import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const AddToFavorites = ({ isFavorited, favoritesCount, articleSlug }) => {
  const favoriteURL = `/articles/${articleSlug}/favorite`;
  const [{ isLoading, response }, createFetchOptions] = useFetch(favoriteURL);
  const [favoritesCountWithResponse, setFavoritesCountWithResponse] =
    useState(favoritesCount);
  const [isFavoritedWithResponse, setIsFavoritedWithResponse] =
    useState(isFavorited);
  let buttonClasses = `btn btn-sm ${
    isFavoritedWithResponse ? "btn-success" : "btn-outline-success"
  }`;
  const handleLike = () => {
    createFetchOptions({
      method: isFavoritedWithResponse ? "DELETE" : "POST",
    });
  };

  useEffect(() => {
    if (response) {
      setIsFavoritedWithResponse(response.article.favorited);
      setFavoritesCountWithResponse(response.article.favoritesCount);
    }
  }, [response]);

  return (
    <button className={buttonClasses} onClick={handleLike} disabled={isLoading}>
      <i className="ion-heart"></i>
      <span>&nbsp; {favoritesCountWithResponse}</span>
    </button>
  );
};

export default AddToFavorites;
