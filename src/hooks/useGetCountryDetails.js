import { useState, useEffect } from "react";

const useGetCountryDetails = (countryName) => {
  const [countryDetails, setCountryDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCountryInfo = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();
        setCountryDetails(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryInfo();
  }, [countryName]);


  return { countryDetails, loading, error };
}

export default useGetCountryDetails;
