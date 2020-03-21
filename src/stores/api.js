export const backendUrl = "https://question.corona.margau.me/api/question-tree";
export const get = (route, params = {}) => {
  let url = new URL(`${backendUrl}${route}`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return fetch(url)
    .then(response => response.json())
    .then(json => json)
    .catch(error => console.log(error));
};
