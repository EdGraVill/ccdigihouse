import { render, screen, waitFor } from '@testing-library/react-native';

import Button from './Button';

describe('Button', () => {
  it('Should render the provided text', async () => {
    const text = 'Text Button';

    render(<Button text={text} />);

    const button = await screen.findByTestId('ButtonContainer');

    expect(button).toHaveTextContent(text);
  });
});
