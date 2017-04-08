import createAPI from 'unity-api';
import middleware from './utils/middleware' ;
import { resources, fetchOptions } from 'apis'

const { API_URL } = require(`config/${ENV}.json`);
const API = createAPI(resources, middleware, API_URL, fetchOptions);

export default API;