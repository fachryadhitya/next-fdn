import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleCard from '../components/article-card';

describe('Product Card Component', () => {
  it('Render successfully', () => {
    const { container } = render(<ArticleCard />);
    expect(container).toMatchSnapshot();
  });

  it('Render component with custom props', () => {
    const props = {
      image: 'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
      author: 'Fachry',
      published_at: '2 hours ago',
      title: 'avoskin'
    };

    const { getByText, getByAltText } = render(<ArticleCard data={props} />);
    expect(getByText('Fachry')).toBeInTheDocument();
    expect(getByText('2 hours ago')).toBeInTheDocument();
    expect(getByText('avoskin')).toBeInTheDocument();
    const image = getByAltText('product picture');
    expect(image).toHaveAttribute('src', props.image);
  });
});
