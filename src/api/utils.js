import React, {useEffect, useState} from 'react';
import { FETCH_ERROR, FETCH_LOADING, FETCH_SUCCESS } from './types';

const API_URL = 'https://mcuapi.herokuapp.com/api/v1';
export const GET_ALL_MCU_MOOVIES = '/movies';
export default API_URL;

export const useFetchData = baseUrl => endpoint => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);
  useEffect(() => {
    let isMounted = true;
    isMounted && setStatus(FETCH_LOADING);
    fetch(`${baseUrl}${endpoint}`)
      .then(res => res.json())
      .then(setData)
      .then(() => setStatus(FETCH_SUCCESS))
      .catch(err => {
        setStatus(FETCH_ERROR);
        console.warn(err);
      });
    // (async () => {
    //   const res = await fn();
    //   if (isMounted && res) {
    //     setStatus('success');
    //     setData(res);
    //   }
    // })();

    return () => (isMounted = false);
  }, []);
  return [data, status];
};
export const useFetchFromBaseApi=useFetchData(API_URL)
