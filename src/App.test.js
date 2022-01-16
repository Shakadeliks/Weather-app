import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

const API_key = 'e5f97e7cc1a8735d58abec6555890821'


test('the location is London', () => {

    
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=e5f97e7cc1a8735d58abec6555890821')

    .then( (res) => res.json())
    .then( (res) => res.name)
    .then( (res) => {
        expect(res).toBe('London')
    })
})