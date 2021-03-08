import { createFlightsRepository } from './createFlightsRepository';

import { createFetchService } from '~/app/helpers/createFetchService';

export const flightsRepository = createFlightsRepository(createFetchService());
