import { apiClient } from "@/lib/apiClient";
import { QueryParams } from "@/types/api";

export const timesheetService = {
  getTimesheets: async (queryParams: QueryParams) => {
    const response = await apiClient(
      `/timesheets?limit=${queryParams?.limit || "5"}&skip=${queryParams?.skip || "0"}&sortBy=${queryParams?.sortBy || "id"}&order=${queryParams?.order || "asc"}${queryParams?.searchQuery ? `&q=${queryParams?.searchQuery}` : ""}${queryParams?.status ? `&status=${queryParams?.status}` : ""}`,
    );
    return response;
  },
};
