import { render } from '@testing-library/react';

import ComponentsDashboard from './components-dashboard';

describe('ComponentsDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
