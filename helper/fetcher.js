export const fetcher = (url) =>
  fetch(url).then((responseJson) => responseJson.json());
