import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReviewCard from '../components/review-card';

const props = {
  user: 'atikaxr',
  profile: ['Oily', 'Medium Dark', 'Warm', '19 - 24'],
  product: {
    image: 'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
    name: 'Tony Moly',
    desc: 'Delight Tony Tint'
  },
  star: 3,
  comment:
    'liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi'
};

describe('Product Card Component', () => {
  it('Render successfully', () => {
    const { container } = render(<ReviewCard />);
    expect(container).toMatchSnapshot();
  });

  it('Render component with custom props', () => {
    const { getByText, getByAltText } = render(<ReviewCard data={props} />);
    expect(getByText(props.user)).toBeInTheDocument();
    expect(getByText(props.product.desc)).toBeInTheDocument();
    expect(getByText(props.product.name)).toBeInTheDocument();
    const image = getByAltText('product picture');
    expect(image).toHaveAttribute('src', props.product.image);
  });

  it('shows comment correctly with state', async () => {
    const { getByText } = render(<ReviewCard data={props} />);
    const desc = getByText(props.comment);
    expect(desc).toHaveClass('line-clamp-3');
    const button = screen.getByRole('button', { name: 'show more' });
    fireEvent.click(button);
    const txt = await screen.findByText(props.comment);
    expect(txt).not.toHaveClass('line-clamp-3');
  });
});
