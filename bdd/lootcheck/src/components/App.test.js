import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('contains a connected Wallet Component', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    });

    it('contains a connected Loot Component', () => {
        expect(app.find('Connect(Loot)').exists()).toBe(true);
    });
});