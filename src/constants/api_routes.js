/**
 * @function queryParams
 * @param params
 * @return encoded URI parameters
 */
function queryParams(params) {
  return Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
}

/**
 * mapped all RESTFUL API Routes into constants
*/

export default {
  CUSTOMERS: params => `/customers?` + queryParams(params),
  QUOTES: params => `/quotes?` + queryParams(params),
  POLICIES: params => `/policies?` + queryParams(params)
}