import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { H1, H2, H3, H4 } from '../headings';

afterEach(cleanup);

test('Should render correct text', () => {
  const { getByText } = render(
    <div>
      <H1>Hello</H1>
      <H2>World</H2>
      <H3>Test Text</H3>
      <H4>Welcome</H4>
    </div>
  );
  const h1Node = getByText('Hello');
  const h2Node = getByText('World');
  const h3Node = getByText('Test Text');
  const h4Node = getByText('Welcome');

  expect(h1Node.textContent).toEqual('Hello');
  expect(h2Node.textContent).toEqual('World');
  expect(h3Node.textContent).toEqual('Test Text');
  expect(h4Node.textContent).toEqual('Welcome');
});

test('Should pass correct props', () => {
  const { getByTestId, getByText } = render(
    <div>
      <H1 id="big-heading">Hello</H1>
      <H2 data-testid="test-heading">World</H2>
    </div>
  );
  const h1Node = getByText('Hello');
  const h2Node = getByTestId('test-heading');

  expect(h1Node.id).toEqual('big-heading');
  expect(h2Node.textContent).toEqual('World');
});
