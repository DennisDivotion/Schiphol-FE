import { queryByText } from '@testing-library/dom';

import { FlightCard } from './FlightCard';

import { createFlightResponseMock } from '~/app/features/flight-search/data/__mock__/createFlightResponseMock';
import { render } from '~/app/helpers/render';

describe('FlightCard', () => {
  const renderFlightCard = (overrides) => {
    return render(FlightCard, createFlightResponseMock(overrides));
  };

  it('renders a flightIdentifier', () => {
    const container = renderFlightCard({
      flightIdentifier: 'AB1234567',
    });

    expect(queryByText(container, /AB1234567/)).toBeInTheDocument();
  });

  it('renders a flightNumber', () => {
    const container = renderFlightCard({
      flightNumber: 'AB 1234',
    });

    expect(queryByText(container, /AB 1234/)).toBeInTheDocument();
  });

  it('renders an airport', () => {
    const container = renderFlightCard({
      airport: 'Tel aviv',
    });

    expect(queryByText(container, /Tel aviv/)).toBeInTheDocument();
  });

  it('renders an expected time', () => {
    const container = renderFlightCard({
      expectedTime: '14:30',
    });

    expect(queryByText(container, /14:30/)).toBeInTheDocument();
  });

  it('renders an original time', () => {
    const container = renderFlightCard({
      originalTime: '20:30',
    });

    expect(queryByText(container, /20:30/)).toBeInTheDocument();
  });

  it('renders a score', () => {
    const container = renderFlightCard({
      expectedTime: '50.125',
    });

    expect(queryByText(container, /50.125/)).toBeInTheDocument();
  });
});
