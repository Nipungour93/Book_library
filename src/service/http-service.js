/**
 * Axios API
 * Middleware of api request and response
 * @format
 */

import axios from 'axios';

import * as Config from '../config';
//  import {AuthToken} from '@app/helpers';

const httpRequest = axios.create({
  baseURL: `${Config.BASE_URL}`,
});

/**
 * axios request interceptors for debugging
 * and modify request data
 */
httpRequest.interceptors.request.use(
  reqConfig => {
    //  const token = AuthToken.get();
    //  if (token) {
    //    reqConfig.headers.Authorization = `Bearer ${token}`;
    //  }
    return reqConfig;
  },
  error => {
    return Promise.reject(error);
  },
);

/**
 * Customizing axios success and error
 * data to easily handle them in app
 */
httpRequest.interceptors.response.use(
  response => {
    return response.data;
  },
  error => Promise.reject(handleApiError(error)),
);

// Handling error
const handleApiError = error => {
  return error?.response;
};

export {httpRequest};
