import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

describe('Home', () => {
  it('renders correctly', () => {
    const element = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(element).toMatchSnapshot();
  });
});
