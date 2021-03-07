import { renderInline } from '~/app/helpers/render';
import { Input } from '~/app/template/components/Input';

const inputId = 'flight-search';

export const FlightSearch = () => `
  <div>
    <h2>
      Flight search
    </h2>
    ${renderInline(Input, {
      label: 'Search',
      type: 'search',
      id: inputId,
    })}
  </div>
`;

const onChange = (event) => {
  const value = event?.target?.value;

  console.log(value);
};

export const FlightSearchEvents = () => {
  const input = document.getElementById(inputId);

  if (!input) return;

  input.addEventListener('input', onChange);
};
