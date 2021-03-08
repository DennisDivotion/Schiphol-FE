import { getByLabelText, queryByText } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { Input } from './Input';

import { render } from '~/app/helpers/render';

describe('Input component', () => {
  const renderInput = (overrides) => {
    return render(Input, overrides);
  };

  it('renders an input with a type text as default with a label', () => {
    const container = renderInput({
      label: 'First name',
      id: 'first-name',
    });

    const element = getByLabelText(container, 'First name');

    expect(element).toHaveAttribute('type', 'text');
  });

  it('renders an input component with a different type', () => {
    const container = renderInput({
      type: 'checkbox',
      label: 'First name',
      id: 'first-name',
    });

    const element = getByLabelText(container, 'First name');

    expect(element).toHaveAttribute('type', 'checkbox');
  });

  it('renders an input with an ID', () => {
    const container = renderInput({
      id: 'form-test-id',
      label: 'First name',
    });

    const element = getByLabelText(container, 'First name');

    expect(element).toHaveAttribute('id', 'form-test-id');
  });

  it('renders an input without a default class', () => {
    const container = renderInput({
      label: 'First name',
      id: 'first-name',
    });

    const element = getByLabelText(container, 'First name');

    expect(element).toHaveAttribute('class', 'rw-input-text');
  });

  it('renders an input with an class', () => {
    const container = renderInput({
      className: 'form-test-class',
      label: 'First name',
      id: 'first-name',
    });

    const element = getByLabelText(container, 'First name');

    expect(element).toHaveClass('form-test-class');
  });

  it('renders an input with an initial value', () => {
    const container = renderInput({
      label: 'First name',
      initialValue: 'Hello world',
      id: 'first-name',
    });

    const element = getByLabelText(container, 'First name');

    expect(element).toHaveValue('Hello world');
  });

  it('updates the input value', () => {
    const container = renderInput({
      label: 'First name',
      id: 'first-name',
    });

    const element = getByLabelText(container, 'First name');

    userEvent.type(element, 'Hello world');

    expect(element).toHaveValue('Hello world');
  });

  it('renders an input with a placeholder', () => {
    const container = renderInput({
      label: 'First name',
      id: 'first-name',
      placeholder: 'Enter your first name',
    });

    const element = getByLabelText(container, 'First name');

    expect(element).toHaveAttribute('placeholder', 'Enter your first name');
  });

  it('renders an input with a description', () => {
    const container = renderInput({
      label: 'First name',
      id: 'first-name',
      description: 'Please enter at least three characters to start searching',
    });

    const element = queryByText(
      container,
      'Please enter at least three characters to start searching',
    );

    expect(element).toBeInTheDocument();
  });
});
