import { renderInlineProp } from '~/app/helpers/render';

export const Input = ({
  type,
  id,
  className,
  label,
  initialValue,
  placeholder,
}) => {
  return `
  <div
    class="rw-input"
    data-component="rw-input-element"
    data-realtime="true"
  >
    <label
      for="${id}"
      class="rw-input-label"
    >
      ${label}
    </label>
    <input
      type="${type || 'text'}"
      id="${id}"
      ${renderInlineProp(placeholder, 'placeholder')}
      ${renderInlineProp(initialValue, 'value')}
      ${renderInlineProp(['rw-input-text', className], 'class')}
    />
  </div>
  `;
};
