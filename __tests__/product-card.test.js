import { render } from '@testing-library/react';
import ProductCard from '../components/product-card';
import '@testing-library/jest-dom'

describe('Product Card Component', () => {
  it('Render successfully', () => {
    const { container } = render(<ProductCard />);
    expect(container).toMatchSnapshot();
  });

  it('Render component with custom props', () => {
    const { getByText, getByAltText } = render(<ProductCard matchSkin withProfileImage />);
    expect(getByText('match skin type')).toBeInTheDocument();
    expect(getByAltText('editor profile')).toBeInTheDocument();
  });
});
