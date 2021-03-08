import { flightsRepository } from '../data/repository';

import { createGetFlightsByAirport } from './getFlightsByAirport';

export const getFlightsByAirport = createGetFlightsByAirport(flightsRepository);
