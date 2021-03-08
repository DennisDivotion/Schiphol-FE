import { FlightCard } from '~/app/components/FlightCard';
import { renderInline } from '~/app/helpers/render';

export const FlightList = (flights) => {
  if (!flights.length) {
    return `
      <div class="variant-container">
        <h2>No results</h2>
      </div>
    `;
  }

  return `
    <div>
      ${flights.map((flight) => renderInline(FlightCard, flight)).join('')}
    </div>
  `;
};
