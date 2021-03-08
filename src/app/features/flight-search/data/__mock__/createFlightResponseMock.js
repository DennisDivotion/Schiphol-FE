export const createFlightResponseMock = (overrides = {}) => {
  return {
    flightIdentifier: '',
    flightNumber: '',
    airport: '',
    expectedTime: '',
    originalTime: '',
    url: '',
    score: '',
    ...overrides,
  };
};
