import axios from "axios"

const API_BASE_URL =
  "https://my-json-server.typicode.com/imSamaritan/solid-project"

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
