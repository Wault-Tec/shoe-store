import { useState, useEffect } from "react";

function useJsonFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=> {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)
          if(!response.ok) {
            setError(response.statusText)
            return
          }
            const data = await response.json()
            setData(data)
            setError(null)
      } catch (e) {
          setError(e)
          throw new Error(e)
      } finally {
          setLoading(false)
      }
    }
    fetchData()

    return () => {

    }
  }, [])

  return [data, loading, error]
}

export default useJsonFetch