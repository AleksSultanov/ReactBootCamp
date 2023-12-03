import { useContext, useEffect, useState } from 'react';

export function useFetchOnMount(url, options) {
  const [data, setData] = useState(null);
  const [err, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(url, options)
      .then((res) => {
        res.json();
      })
      .then((dataFromRespone) => {
        setData(dataFromRespone);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    err,
    isLoading,
  };
}

export function useToggle() {
  const [isToggle, setToggle] = useState(false);

  function onToggle() {
    console.log('toggle');
    setToggle(!isToggle);
  }

  return {
    isToggle,
    onToggle,
  };
}
