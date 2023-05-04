import { render, screen } from '@testing-library/react-native';

import WelcomeMessage from './WelcomeMessage';

describe('WelcomeMessage', () => {
  it('Should render name in welcome message', async () => {
    const name = 'John Doe';

    render(<WelcomeMessage name={name} />);

    const welcomeMessageName = await screen.findByTestId('WelcomeMessageName');

    expect(welcomeMessageName).toHaveTextContent(name);
  });
});
