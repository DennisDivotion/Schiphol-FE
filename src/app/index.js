import {
  FlightSearch,
  FlightSearchEvents,
} from '~/app/features/flight-search/ui/';
import { render } from '~/app/helpers/render';
import { App } from '~/app/layout/App';

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
