import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdsBanner from '../components/ads-banner';

describe('Ads Banner Component', () => {
  it('Render successfully', () => {
    const { container } = render(<AdsBanner width={700} height={700} />);
    expect(container).toMatchSnapshot();
  });

  it('Render component with specific width', () => {
    const { getByTestId, getByText } = render(<AdsBanner width={700} height={700} />);
    expect(getByTestId('ads-banner')).toHaveStyle('width: 700px');
    expect(getByText('700 x 700')).toBeInTheDocument();

  });
});
