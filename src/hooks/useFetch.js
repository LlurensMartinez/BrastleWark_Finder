import { useState, useEffect } from 'react';

const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ status: false, message: '' });

  useEffect(() => {
    (async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoading(false);
        } catch (error) {
            setError({ status: true, message: error.message });
            setLoading(false);
        }
    })();
  }, [url]);
  return [data, loading, error];
}
export default useFetch;



