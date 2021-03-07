const initEvents = (events) => {
  events.forEach((event) => event());
};

export const renderInlineProp = (propValue, propKey) => {
  if (propValue) {
    if (Array.isArray(propValue)) {
      return `${propKey}="${propValue.filter((item) => item).join(' ')}"`;
    }

    return `${propKey}="${propValue}"`;
  }

  return '';
};

export const renderInline = (component, props) => {
  return component(props);
};

export const render = (component, props, container = document.body, events) => {
  // eslint-disable-next-line no-param-reassign
  container.innerHTML = renderInline(component, props);

  if (events && events.length) initEvents(events);

  return container;
};
