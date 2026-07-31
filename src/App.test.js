import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

test('renders Uchenna’s portfolio introduction', () => {
  global.IS_REACT_ACT_ENVIRONMENT = true;
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => root.render(<App />));

  expect(container.querySelector('h1')).toHaveTextContent(
    'I build digital products that scale.'
  );
  expect(container).toHaveTextContent('9+ years of experience');

  const analyticsToggle = Array.from(container.querySelectorAll('button')).find(
    (button) => button.textContent.includes('Visitors around the world')
  );
  expect(analyticsToggle).toHaveAttribute('aria-expanded', 'false');

  act(() => analyticsToggle.click());
  expect(analyticsToggle).toHaveAttribute('aria-expanded', 'true');

  act(() => root.unmount());
  container.remove();
});
