import { render, screen } from '@testing-library/react-native';

import Section from './Section';

describe('Section', () => {
  it('Should render title', async () => {
    const title = 'Section Title';

    render(<Section title={title} />);

    const sectionTitle = await screen.findByTestId('SectionTitle');

    expect(sectionTitle).toHaveTextContent(title);
  });

  it('Should render big title by default', async () => {
    const title = 'Section Title';

    render(<Section title={title} />);

    const sectionTitle = await screen.findByTestId('SectionTitle');

    expect(sectionTitle).toHaveStyle({ textTransform: 'uppercase' });
  });

  it('Should render big small title if is defined via prop', async () => {
    const title = 'Section Title';

    render(<Section isSmallTitle={true} title={title} />);

    const sectionTitle = await screen.findByTestId('SectionTitle');

    expect(sectionTitle).toHaveStyle({ textTransform: 'none' });
  });
});
