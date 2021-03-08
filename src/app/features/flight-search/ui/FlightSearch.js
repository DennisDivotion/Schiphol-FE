import { getFlightsByAirport } from '../domain';

import { FlightList } from './FlightList';

import { Input } from '~/app/components/Input';
import { render, renderInline } from '~/app/helpers/render';

const inputId = 'flight-search';

export const flightSearchResultId = 'flight-search-results';

export const FlightSearch = () => `
  <div>
    <h2>
      Search for your flight
    </h2>
    ${renderInline(Input, {
      label: 'Search by airport',
      type: 'search',
      id: inputId,
    })}
    <div data-testid="${flightSearchResultId}" id="${flightSearchResultId}"></div>
  </div>
`;

const onChange = async (event) => {
  const value = event?.target?.value;
  const resultContainer = document.getElementById(flightSearchResultId);

  if (!resultContainer) return;

  if (value.length < 3) {
    resultContainer.innerHTML = '';

    return;
  }

  const flights = await getFlightsByAirport(value);

  render(FlightList, flights, resultContainer);
};

export const FlightSearchEvents = () => {
  const input = document.getElementById(inputId);

  if (!input) return;

  input.addEventListener('input', onChange);
};
