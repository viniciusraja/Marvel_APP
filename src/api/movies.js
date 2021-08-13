import {GET_ALL_MCU_MOOVIES, useFetchFromBaseApi} from './utils';

export const fetchMCUMovies = () => {
  return useFetchFromBaseApi(GET_ALL_MCU_MOOVIES);
};
