import { useQuery, keepPreviousData } from "@tanstack/react-query";

import API from "../service/index";

export const useGetAllTodoQuery = (resourceId) => {
  return useQuery({
    queryKey: ["todos"],
    retry: false,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,

    queryFn: async () => {
      const res = await API.private.getAllTodos();
      console.log(res?.data);

      if (res) return res.data;
      throw new Error("Failed to load todos data!");
    },
  });
};

export const useGetSingleTodoQuery = (resourceId) => {
  return useQuery({
    queryKey: ["todo", resourceId],
    retry: false,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
    enabled: !!resourceId,

    queryFn: async () => {
      const res = await API.private.getSingleTodos(resourceId);

      if (res) return res.data;
      throw new Error("Failed to load single todo data!");
    },
  });
};
