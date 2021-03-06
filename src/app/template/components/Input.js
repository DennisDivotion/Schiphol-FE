import { renderInlineProp } from '~/app/helpers/render';

const defaults = {
  type: 'text',
};

export const Input = ({ type, id, className } = defaults) => {
  return `
    <input
      type="${type}"
      ${renderInlineProp(id, 'id')}
      ${renderInlineProp(className, 'class')} />
  `;
};
