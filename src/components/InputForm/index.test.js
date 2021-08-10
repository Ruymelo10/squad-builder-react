import React from 'react';
import { screen, render } from '@testing-library/react';
import { InputForm } from '.';

describe('<InputForm />', () => {
  it('should render an input', async () => {
    render(
      <InputForm type="input" name="input" id="inputId" htmlFor="inputId" labelName="teste" />,
    );
    const btn = await screen.findByLabelText(/teste/i);
    expect(btn).toBeVisible();
  });

  it('should render a label that matches the labelName prop', async () => {
    const labelName = 'label name';
    render(
      <InputForm type="input" name="input" id="inputId" htmlFor="inputId" labelName={labelName} />,
    );
    expect(await screen.getByText(labelName)).toBeInTheDocument();
  });

  it('user should be able to write in input', () => {});
});
