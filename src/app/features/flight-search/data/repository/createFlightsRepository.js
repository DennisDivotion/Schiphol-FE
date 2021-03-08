const filterFlightsByAirport = (flights, airport) =>
  flights.filter((flight) => flight.airport.match(new RegExp(airport, 'i')));

export const createFlightsRepository = (service) => {
  return {
    async get(airport) {
      const response = await service.performRequest({
        endpoint: '/static/flights.json',
      });

      return filterFlightsByAirport(response.flights, airport);
    },
  };
};
