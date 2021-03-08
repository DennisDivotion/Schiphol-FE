export const createFetchService = () => {
  return {
    performRequest: async (options) => {
      const response = await fetch(options.endpoint);

      return response.json();
    },
  };
};
