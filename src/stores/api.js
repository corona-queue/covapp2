export const backendUrl = "https://question.corona.margau.me/api/question-tree";
export const get = (route, params = {}) => {
  let url = new URL(`${backendUrl}${route}`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return fetch(url)
    .then(response => response.json())
    .then(json => json)
    .catch(error => console.log(error));
};

export const getJson = route => {
  const request = buildRequest({ route });
  //return handleFetch(request);
};
export const postRequest = (route, body, jsonBody = true) => {
  const request = buildRequest({ route, method: "POST", body, jsonBody });
  //return handleFetch(request);
};
const buildRequest = params => {
  const { route, method = "GET", body = null, jsonBody = true } = params;
  let headers = { "Access-Control-Allow-Origin": "*" };
  if (jsonBody) {
    headers = { ...headers, "Content-Type": "application/json" };
  }
  let options = {
    headers,
    method,
    mode: "cors",
    timeout: 0
  };
  if (body !== null) {
    options = { ...options, body: jsonBody ? JSON.stringify(body) : body };
  }
}
