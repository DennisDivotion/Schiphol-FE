export const FlightCard = ({
  flightIdentifier,
  flightNumber,
  airport,
  expectedTime,
  url,
}) => {
  return `
    <div class="variant-container">
      <div class="rw-card rw-card--caret">
        <div class="rw-card__body">
          <h3 class="rw-card__header">
            ${flightNumber} - ${airport} (${flightIdentifier})
          </h3>
          <div class="rw-card__meta">
            Expected time of arrival: <time>${expectedTime}</time>
          </div>
        </div>
        <div class="rw-card__footer">
          <a href="${url}" class="rw-card__link rw-icon-link" target="_blank">
            <span class="rw-icon-link__text">
              Read Article
            </span>
          </a>
        </div>
      </div>
    </div>
  `;
};
