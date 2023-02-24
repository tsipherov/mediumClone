import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArticleForm from "../../components/ArticleForm/ArticleForm";
import { useFetch } from "../../hooks/useFetch";
import { UserContext } from "../../contexts/userContext";

const EditArticle = () => {
  const slag = useParams().slag;
  const submitURL = `/articles/${slag}`;
  const [{ error, response }, createFetchOptions] = useFetch(submitURL);
  const navigate = useNavigate();
  const [userState] = useContext(UserContext);
  const [edited, setEdited] = useState(false);
  const [isError, setIsError] = useState(false);

  let initialValues = {
    title: "",
    description: "",
    body: "",
    tagList: [],
  };

  useEffect(() => {
    // console.log("useEffect on error >>> ", error);
    setIsError(true);
  }, [error]);

  useEffect(() => {
    createFetchOptions();
    // console.log("first useEffect >>> ", response);
  }, []);

  if (response?.article) {
    const { title, description, body, tagList } = response.article;
    initialValues = {
      title,
      description,
      body,
      tagList,
    };
  }
  const onSubmit = (article) => {
    createFetchOptions({
      method: "PUT",
      data: { article },
    });
    setEdited(true);
  };

  if (userState.isLogedIn === false) navigate(`/login`);

  useEffect(() => {
    if (!error && edited && response?.article?.slug) {
      // console.log("second useEffect");
      navigate(`/article/${response.article.slug}`);
    }
  }, [response]);

  return (
    <div>
      <ArticleForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        errors={isError && error}
      />
    </div>
  );
};

export default EditArticle;
