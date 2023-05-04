import { render, screen } from '@testing-library/react-native';

import PointsCard from './PointsCard';

describe('PointsCard', () => {
  it('Should render points with 2 decimals', async () => {
    render(<PointsCard points={100} />);

    const pointsCard = await screen.findByTestId('PointsCardPoints');

    expect(pointsCard).toHaveTextContent('100.00 pts');
  });

  it('Should render points with comma separation', async () => {
    render(<PointsCard points={100000} />);

    const pointsCard = await screen.findByTestId('PointsCardPoints');

    expect(pointsCard).toHaveTextContent('100,000.00 pts');
  });
});
