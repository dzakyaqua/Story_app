import Config from './config';
 
const ApiEndpoint = {
  REGISTER: `${Config.BASE_URL}/register`,
  LOGIN: `${Config.BASE_URL}/login`,

  GET_ALL_STORY: `${Config.BASE_URL}/stories`,
  GET_BY_ID_STORY: (id) => `${Config.BASE_URL}/stories/${id}`,
  CREATE_STORY: `${Config.BASE_URL}/stories`,
  UPDATE_STORY: (id) => `${Config.BASE_URL}/stories/${id}`,
  DESTROY_STORY: (id) => `${Config.BASE_URL}/stories/${id}`,
};
 
export default ApiEndpoint;