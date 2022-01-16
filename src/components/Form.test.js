import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import Weather from './Weather';
import Form from './Form';
import '@testing-library/jest-dom/extend-expect';

test('city & country input fields are rendered correctly', () => {
    
    const { queryByTitle } = render(<Form />);
    const cityInput = queryByTitle('city-input');
    const countryInput = queryByTitle('country-input');

    expect(cityInput).toBeTruthy();
    expect(countryInput).toBeTruthy();
});
