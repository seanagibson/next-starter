import React from 'react';
import { cleanup, render } from 'react-testing-library';
import Grid from '../Grid';

afterEach(cleanup);

test('should render children', () => {
  const { getByTestId } = render(
    <Grid>
      <h1 data-testid="test-heading">Test Heading</h1>
    </Grid>
  );
  const node = getByTestId('test-heading');

  expect(node.textContent).toEqual('Test Heading');
});

test('snapshot', () => {
  const { container } = render(
    <Grid>
      <h1 data-testid="test-heading">Test Heading</h1>
    </Grid>
  );
  expect(container.firstChild).toMatchSnapshot();
});
