import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArticleForm from "../../components/ArticleForm/ArticleForm";
import { useFetch } from "../../hooks/useFetch";

const CreateArticle = () => {
  const submitURL = "/articles";
  const [{ error, response }, createFetchOptions] = useFetch(submitURL);
  let initialValues = {
    title: "",
    description: "",
    body: "",
    tagList: ["foo", "bar", "asd"],
  };
  const navigate = useNavigate();
  const onSubmit = (article) => {
    createFetchOptions({
      method: "POST",
      data: { article },
    });
  };
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
