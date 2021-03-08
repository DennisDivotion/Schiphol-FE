import { Header } from './Header';

import { renderInline } from '~/app/helpers/render';

export const App = ({ children, ...props }) => `
  ${renderInline(Header)}

  <main>
    ${renderInline(children, props)}
  </main>
`;
