import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Button } from './index';

describe('<Button />', () => {
  it('should render a button', () => {
    const component = render(<Button>Test</Button>);
    expect(component.getByRole('button')).toBeVisible();
  });

  it('should matches and children passed', () => {
    const children = 'some text';
    const component = render(<Button>{children}</Button>);
    component.getByRole('button').innerHTML;
    expect(component.getByRole('button').innerHTML).toEqual(children);
  });

  it('should execute a function onClick when its clicked', async () => {
    const mockCallback = jest.fn();
    const component = render(<Button onClick={mockCallback}>Test</Button>);
    const btn = await component.findByRole('button');
    fireEvent.click(btn);
    expect(mockCallback).toHaveBeenCalled();
  });
});
