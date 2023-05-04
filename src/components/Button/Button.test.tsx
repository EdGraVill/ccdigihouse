import { fireEvent, render, screen } from '@testing-library/react-native';

import Button from './Button';

describe('Button', () => {
  it('Should render the provided text', async () => {
    const text = 'Text Button';

    render(<Button text={text} />);

    const button = await screen.findByTestId('ButtonContainer');

    expect(button).toHaveTextContent(text);
  });

  it('Should fire a function when pressed', async () => {
    const text = 'Text Button';
    const onPress = jest.fn();

    render(<Button onPress={onPress} text={text} />);

    const button = await screen.findByTestId('ButtonTouchable');

    fireEvent.press(button);

    expect(onPress).toHaveBeenCalled();
  });
});
