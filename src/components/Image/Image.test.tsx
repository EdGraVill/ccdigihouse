import { fireEvent, render, screen } from '@testing-library/react-native';

import Image from './Image';

describe('Image', () => {
  it('Should render backdrop image if image is not loaded', async () => {
    render(<Image source={{ uri: '' }} />);

    const backdropImage = await screen.findByTestId('ImageBackdropImage');
    const image = await screen.findByTestId('ImageImage');

    expect(backdropImage).toHaveStyle({ display: 'flex' });
    expect(image).toHaveStyle({ position: 'absolute', transform: [{ scale: 0 }] });
  });

  it('Should render image if image is loaded', async () => {
    render(<Image source={{ uri: '' }} />);

    const backdropImage = await screen.findByTestId('ImageBackdropImage');
    const image = await screen.findByTestId('ImageImage');

    fireEvent(image, 'onLoadEnd');

    expect(backdropImage).toHaveStyle({ display: 'none' });
    expect(image).toHaveStyle({ position: 'relative', transform: [{ scale: 1 }] });
  });
});
