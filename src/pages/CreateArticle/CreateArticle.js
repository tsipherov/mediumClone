import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArticleForm from "../../components/ArticleForm/ArticleForm";
import { useFetch } from "../../hooks/useFetch";
import { UserContext } from "../../contexts/userContext";

const CreateArticle = () => {
  const submitURL = "/articles";
  const [{ error, response }, createFetchOptions] = useFetch(submitURL);
  const navigate = useNavigate();
  const [userState] = useContext(UserContext);

  let initialValues = {
    title: "",
    description: "",
    body: "",
    tagList: ["foo", "bar", "asd"],
  };

  const onSubmit = (article) => {
    createFetchOptions({
      method: "POST",
      data: { article },
    });
  };

  if (userState.isLogedIn === false) navigate(`/login`);

  useEffect(() => {
    if (response?.article?.slug) navigate(`/article/${response.article.slug}`);
  }, [response]);

  return (
    <div>
      <ArticleForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        errors={error?.errors}
      />
    </div>
  );
};

export default CreateArticle;
