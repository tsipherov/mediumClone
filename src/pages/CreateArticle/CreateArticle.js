import React from "react";
import ArticleForm from "../../components/ArticleForm/ArticleForm";
import { useFetch } from "../../hooks/useFetch";

const CreateArticle = () => {
  const submitURL = "/articles";
  const [{ error }, createFetchOptions] = useFetch(submitURL);
  let initialValues = {
    title: "title",
    description: "descript",
    body: "article text",
    tagList: "tag",
  };
  const onSubmit = (article) => {
    console.log("onSubmit >>> ", article);
    createFetchOptions({
      method: "POST",
      body: article,
    });
  };

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
