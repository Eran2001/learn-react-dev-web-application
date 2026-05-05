import { useQuery, keepPreviousData } from "@tanstack/react-query";

import API from "../service/index";

export const useGetAllTodoQuery = (resourceId) => {
  return useQuery({
    queryKey: ["todos"],
    retry: false,
    refetchOnWindowFocus: false,
    resourceId: !!resourceId,
    placeholderData: keepPreviousData,

    queryFn: async () => {
      const res = API.private.getAllTodos(resourceId);
      console.log(res?.data);

      if (res) return res;
      throw new Error("Failed to load call history");
    },
  });
};
