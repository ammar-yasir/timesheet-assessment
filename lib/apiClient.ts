import { API_BASE_URL } from "@/constants";

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {},
  serverError?: string
): Promise<T> {
  const url = `${API_BASE_URL}/api${endpoint}`;

  // Default headers (e.g., Content-Type)
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: serverError || "Unknown error" }));
    throw new Error(error.message || "API Request failed");
  }

  if (response.status === 204) return {} as T;

  return response.json();
}