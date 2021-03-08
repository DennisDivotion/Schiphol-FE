import { FlightCard } from '~/app/components/FlightCard';
import { renderInline } from '~/app/helpers/render';

export const FlightList = (flights) => {
  if (!flights.length) {
    return `
      <h2>No results</h2>
    `;
  }

  return `
    <div>
      ${flights.map((flight) => renderInline(FlightCard, flight)).join('')}
    </div>
  `;
};
