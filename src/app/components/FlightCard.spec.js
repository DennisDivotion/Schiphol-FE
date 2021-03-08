import { queryByText, queryByRole } from '@testing-library/dom';

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

  it('renders a link', () => {
    const container = renderFlightCard({
      url: '/some-url/',
    });

    expect(queryByRole(container, 'link')).toHaveAttribute(
      'href',
      '/some-url/',
    );
    expect(queryByRole(container, 'link')).toHaveAttribute('target', '_blank');
  });
});
