import { renderInline } from '~/app/helpers/render';
import { Input } from '~/app/template/components/Input';

export const FlightSearch = () => `
  <div>
    Flight search
    ${renderInline(Input)}
  </div>
`;
