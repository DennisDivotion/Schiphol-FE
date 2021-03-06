import { getByTestId } from '@testing-library/dom';

import { Input } from './Input';

import { render } from '~/app/helpers/render';

describe('Input component', () => {
  const renderInput = (overrides) => {
    return render(Input, overrides, document.createElement('div'));
  };

  it('renders an input component with a type text as default', () => {
    const container = renderInput();
    const element = getByTestId(container, 'input');

    expect(element).toHaveAttribute('type', 'text');
  });

  it('renders an input component with a different type', () => {
    const container = renderInput({
      type: 'checkbox',
    });

    const element = getByTestId(container, 'input');

    expect(element).toHaveAttribute('type', 'checkbox');
  });

  it('renders an input without an ID', () => {
    const container = renderInput();

    const element = getByTestId(container, 'input');

    expect(element).not.toHaveAttribute('id');
  });

  it('renders an input with an ID', () => {
    const container = renderInput({
      id: 'form-test-id',
    });

    const element = getByTestId(container, 'input');

    expect(element).toHaveAttribute('id', 'form-test-id');
  });

  it('renders an input without an class', () => {
    const container = renderInput();

    const element = getByTestId(container, 'input');

    expect(element).not.toHaveAttribute('class');
  });

  it('renders an input with an class', () => {
    const container = renderInput({
      className: 'form-test-class',
    });

    const element = getByTestId(container, 'input');

    expect(element).toHaveClass('form-test-class');
  });
});
