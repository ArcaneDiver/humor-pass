import { render } from '@testing-library/react';

import ComponentsApp from './components-app';

describe('ComponentsApp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsApp />);
    expect(baseElement).toBeTruthy();
  });
});
