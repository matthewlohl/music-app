import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App', () => {
    beforeEach(() => {
        render(<App />)
    })

    test('renders Album name', () => {
        const album = screen.getByRole('heading', {name: 'album'});
        expect(album.textContent).toBe('Red');
    })
})
