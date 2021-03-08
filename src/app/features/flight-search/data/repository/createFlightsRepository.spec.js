import { createFlightResponseMock } from '../__mock__/createFlightResponseMock';

import { createFlightsRepository } from './createFlightsRepository';

describe('createFlightsRepository', () => {
  const createMockedResponse = (overrides) => {
    return {
      flights: [],
      ...overrides,
    };
  };

  it('returns a get method', () => {
    const result = createFlightsRepository();

    expect(result).toEqual({
      get: expect.any(Function),
    });
  });

  it('calls the service with the correct params', async () => {
    const mockedPerformRequest = jest
      .fn()
      .mockResolvedValue(createMockedResponse());

    const mockedService = {
      performRequest: mockedPerformRequest,
    };

    const repository = createFlightsRepository(mockedService);

    await repository.get();

    expect(mockedPerformRequest).toHaveBeenCalledWith({
      endpoint: '/static/flights.json',
    });
  });

  it('filters the flights based on the get params', async () => {
    const mockedPerformRequest = jest.fn().mockResolvedValue(
      createMockedResponse({
        flights: [
          createFlightResponseMock({
            airport: 'Tel aviv',
          }),
          createFlightResponseMock({
            airport: 'Schiphol',
          }),
        ],
      }),
    );

    const mockedService = {
      performRequest: mockedPerformRequest,
    };

    const repository = createFlightsRepository(mockedService);

    const response = await repository.get('Schiphol');

    expect(response).toHaveLength(1);
  });

  it('filters the flights based on the get params with a regex', async () => {
    const mockedPerformRequest = jest.fn().mockResolvedValue(
      createMockedResponse({
        flights: [
          createFlightResponseMock({
            airport: 'Tel aviv',
          }),
          createFlightResponseMock({
            airport: 'Schiphol',
          }),
        ],
      }),
    );

    const mockedService = {
      performRequest: mockedPerformRequest,
    };

    const repository = createFlightsRepository(mockedService);

    const response = await repository.get('sch');

    expect(response).toHaveLength(1);
  });
});
