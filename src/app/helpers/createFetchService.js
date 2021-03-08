export const createFetchService = () => {
  return {
    performRequest: (options) => {
      return fetch(options.endpoint).then((res) => res.json());
    },
  };
};
