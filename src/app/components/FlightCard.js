export const FlightCard = ({
  flightIdentifier,
  flightNumber,
  airport,
  expectedTime,
  originalTime,
  url,
  score,
}) => {
  return `
    <div>
      <div>${flightIdentifier}</div>
      <div>${flightNumber}</div>
      <div>${airport}</div>
      <div>${expectedTime}</div>
      <div>${originalTime}</div>
      <div>${url}</div>
      <div>${score}</div>
    </div>
  `;
};
