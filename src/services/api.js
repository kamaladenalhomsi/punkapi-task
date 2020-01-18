// API Service Module

const API = {
  endpoint: process.env.VUE_APP_API_BASE_URL,
  /**
   * @function fetchData
   * @params route is the route name
   */
  fetchData: async function ({ route }) {
    try {
      const response = await fetch(this.endpoint + route)
      if (response.status === 200) {
        const json = await response.json()
        return json
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export default API
