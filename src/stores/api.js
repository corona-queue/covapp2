export const backendUrl = "https://question.corona.margau.me/api/question-tree";
export const get = (route, params = {}) => {
  let url = new URL(`${backendUrl}${route}`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return fetch(url)
    .then(response => response.json())
    .then(json => json)
    .catch(error => console.log(error));
};

export const post = (route, body, jsonBody = true) => {
  const request = buildRequest({ route, method: "POST", body, jsonBody });
  return handleFetch(request);
};

const handleFetch = (request, jsonResponse = true) => {
  return new Promise((resolve, reject) => {
    fetch(request)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Server returned ${response.status}`);
        }
        return jsonResponse ? response.json() : response;
      })
      // in case JSON is retuned, wait for response.json() promise to resolve
      .then(json => resolve(json))
      .catch(error => reject(error));
  });
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
  return new Request(`${backendUrl}${route}`, options);
};
