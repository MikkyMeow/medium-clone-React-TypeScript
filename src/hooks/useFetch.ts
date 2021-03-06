import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const baseUrl: string = 'https://conduit.productionready.io/api';
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = (options = {}) => {
    setOptions(options);
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    axios(baseUrl + url, options)
      .then((res) => {
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  });

  return [{ isLoading, response, error }, doFetch];
};

export default useFetch;
