import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const baseUrl = "https://conduit.productionready.io/api";

  const createFetchOptions = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) return;
    // console.log("options: ", options);
    axios(baseUrl + url, options)
      .then((res) => {
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("err: ", err);
        setError(err.response.data);
        setIsLoading(false);
      });
  }, [isLoading]);

  return [{ isLoading, response, error }, createFetchOptions];
};
