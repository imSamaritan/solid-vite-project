import { apiClient } from "./shared/Client"

export default {
  async all() {
    const response = await apiClient.get("/products")
    return response.data
  },

  async find(id) {
    const response = await apiClient.get("/products/" + id)
    return response.data
  },
}
