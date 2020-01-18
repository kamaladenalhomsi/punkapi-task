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
  },
  /**
   * @function queryParams
   * @param params
   * @return encoded URI parameters
   */
  queryParams: function (params) {
    return Object.keys(params)
      .map(k => {
        if (params[k]) return encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
      })
      .join('&')
  }
}

export default API
