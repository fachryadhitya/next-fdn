import { render } from '@testing-library/react';
import ProductCard from '../components/product-card';

describe('Product Card Component', () => {
  it('Render successfully', () => {
    const { container } = render(<ProductCard />);
    expect(container).toMatchSnapshot();
  });
});
