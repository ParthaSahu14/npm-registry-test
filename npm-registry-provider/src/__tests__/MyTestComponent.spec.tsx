import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { MyTestComponent } from '../components/mytest.component';
let documentBody: RenderResult;
describe('My Test Component', () => {
    beforeEach(() => {
        documentBody = render(<MyTestComponent name='partha' />);
    });
    it('shows not found message', () => {
        expect(documentBody.getByText('Hello, partha')).toBeInTheDocument();
    });
});