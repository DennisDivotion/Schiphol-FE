import { render } from '~/app/helpers/render';
import {
  FlightSearch,
  FlightSearchEvents,
} from '~/app/template/features/flight-search';
import { App } from '~/app/template/layout/App';

export default (() => {
  render(
    App,
    {
      children: FlightSearch,
    },
    document.body,
    [FlightSearchEvents],
  );
})();
