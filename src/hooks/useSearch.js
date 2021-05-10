import { useState, useEffect } from 'react';
import { searchLocations } from 'services/metaweatherAPI';

/**
 * Search locations with text
 * @param {string} text
 */
export default function useSearch(text) {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState('')
  const [error, setError] = useState('');

  const fetchData = async (text) => {
    try {
      setError('');
      setLoading(true);
      const cities = await searchLocations(text);
      setCities(cities);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData(text);
  }, [text]);

  return {
    loading,
    cities,
    error,
  }
}