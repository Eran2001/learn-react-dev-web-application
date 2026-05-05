import instance from "../lib/axios";

const getAllTodos = (resourceID) => {
  return instance.apiClient.get(`/todos/${resourceID}`);
};

const privateAPI = {
  getAllTodos,
};

export default privateAPI;
