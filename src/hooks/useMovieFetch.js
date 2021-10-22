import { useState, useEffect } from 'react';
import { isPersistedState } from '../helpers';

import API from '../API';
// Helpers

export const useMovieFetch = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        // Get directors only
        const directors = credits.crew.filter(
          member => member.job === 'Director'
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };


    
    const sessionState = isPersistedState(movieId.toString());

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);

    // Write to sessionStorage
    useEffect(() => {
      sessionStorage.setItem(movieId.toString(), JSON.stringify(state));
    }, [movieId, state]);
  

  return { state, loading, error };
};


/*

import { useState, useEffect, useCallback } from 'react';
import API from '../API';
// Helpers

export const useMovieFetch = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovie = useCallback (async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        // Get directors only
        const directors = credits.crew.filter(
          member => member.job === 'Director'
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, [movieId]);// Ending useCallBack hook when using a func defined outside from useEffect



  useEffect(() => {
    

    fetchMovie();
  }, [movieId, fetchMovie]);

  return { state, loading, error };
};






*/