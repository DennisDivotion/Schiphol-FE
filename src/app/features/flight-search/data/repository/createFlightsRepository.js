const filterFlightsByAirport = (flights, airport) =>
  flights.filter((flight) => flight.airport.match(new RegExp(airport, 'i')));

export const createFlightsRepository = (service) => {
  return {
    get(airport) {
      return service
        .performRequest({
          endpoint: '/static/flights.json',
        })
        .then((response) => filterFlightsByAirport(response.flights, airport));
    },
  };
};
