import { renderInline, renderInlineProp } from '~/app/helpers/render';

const InputDescription = (description) => {
  if (!description) return '';

  return `<p class="rw-input__description">${description}</p>`;
};

export const Input = ({
  type,
  id,
  className,
  label,
  initialValue,
  placeholder,
  description,
}) => {
  return `
  <div
    class="rw-input"
    data-component="rw-input-element"
    data-realtime="true"
  >
    ${renderInline(InputDescription, description)}
    <label
      for="${id}"
      class="rw-input-label"
    >
      ${label}
    </label>
    <input
      type="${type || 'text'}"
      id="${id}"
      ${renderInlineProp('placeholder', placeholder)}
      ${renderInlineProp('value', initialValue)}
      ${renderInlineProp('class', ['rw-input-text', className])}
    />
  </div>
  `;
};
