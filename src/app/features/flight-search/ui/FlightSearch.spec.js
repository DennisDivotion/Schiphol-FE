import {
  queryByText,
  queryByLabelText,
  getByLabelText,
  queryByTestId,
  waitFor,
} from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { getFlightsByAirport } from '../domain';

import {
  FlightSearch,
  FlightSearchEvents,
  flightSearchResultId,
} from './FlightSearch';

import { createFlightResponseMock } from '~/app/features/flight-search/data/__mock__/createFlightResponseMock';
import { render } from '~/app/helpers/render';

jest.mock('../domain');

describe('FlightSearch', () => {
  const renderFlightSearch = () => {
    return render(FlightSearch, undefined, undefined, [FlightSearchEvents]);
  };

  beforeEach(() => {
    getFlightsByAirport.mockReset();
  });

  it('renders a title', () => {
    const container = renderFlightSearch();

    expect(
      queryByText(container, /Search for your flight/i),
    ).toBeInTheDocument();
  });

  it('renders a search input with a label', () => {
    const container = renderFlightSearch();

    expect(queryByLabelText(container, /Search by airport/i)).toHaveAttribute(
      'type',
      'search',
    );
  });

  it('does not render results on initial render', () => {
    const container = renderFlightSearch();

    expect(
      queryByTestId(container, flightSearchResultId),
    ).toBeEmptyDOMElement();
  });

  it('does not render results after typing less then 3 characters', () => {
    getFlightsByAirport.mockResolvedValueOnce([
      createFlightResponseMock({
        airport: 'Schiphol',
      }),
    ]);

    const container = renderFlightSearch();

    userEvent.type(getByLabelText(container, /Search by airport/i), 'Sc');

    expect(
      queryByTestId(container, flightSearchResultId),
    ).toBeEmptyDOMElement();
  });

  it('render FlightCards after typing at least 3 characters', async () => {
    getFlightsByAirport.mockResolvedValueOnce([
      createFlightResponseMock({
        airport: 'Schiphol',
      }),
    ]);

    const container = renderFlightSearch();

    userEvent.type(getByLabelText(container, /Search by airport/i), 'Sch');

    expect(getFlightsByAirport).toHaveBeenCalledWith('Sch');

    await waitFor(() =>
      expect(
        queryByTestId(container, flightSearchResultId),
      ).not.toBeEmptyDOMElement(),
    );

    expect(queryByText(container, /Schiphol/)).toBeInTheDocument();
  });

  it('render no results text when no flights available', async () => {
    getFlightsByAirport.mockResolvedValueOnce([]);

    const container = renderFlightSearch();

    userEvent.type(getByLabelText(container, /Search by airport/i), 'Sch');

    await waitFor(() =>
      expect(
        queryByTestId(container, flightSearchResultId),
      ).not.toBeEmptyDOMElement(),
    );

    expect(queryByText(container, /No results/)).toBeInTheDocument();
  });
});
