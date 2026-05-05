import instance from "../lib/axios";

const getAllTodos = () => {
  return instance.apiClient.get(`/todos`);
};

const getSingleTodos = (resourceID) => {
  return instance.apiClient.get(`/todos/${resourceID}`);
};

const privateAPI = {
  getAllTodos,
  getSingleTodos,
};

export default privateAPI;
