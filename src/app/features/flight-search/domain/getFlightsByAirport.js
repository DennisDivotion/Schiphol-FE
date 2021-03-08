export const createGetFlightsByAirport = (repository) => {
  return (identifier) => {
    return repository.get(identifier);
  };
};
