import { useState } from 'react';

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const doFetch = () => {
    return;
  };

  return [{ isLoading, response, error }, doFetch];
};

export default useFetch;
