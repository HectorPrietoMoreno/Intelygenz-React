import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Header from './header.component';

configure({adapter: new Adapter()});
describe('Header component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header title ='title test' description = 'description test'/>);
    });

    it('should render Header component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should display title', () => {
        expect(wrapper.text()).toContain('title test');
    });

    it('should display description', () => {
        expect(wrapper.text()).toContain('description test');
    });

});