export const renderInlineProp = (propValue, propKey) => {
  if (propValue) {
    return `${propKey}="${propValue}"`;
  }

  return '';
};

export const renderInline = (component, props) => {
  return component(props);
};

export const render = (component, props, container = document.body) => {
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = renderInline(component, props);

  return container;
};
