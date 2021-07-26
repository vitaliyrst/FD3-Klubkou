import React from 'react';
import renderer from 'react-test-renderer';
import Company from "../components/Company/Company";
import data from '../data.json';

test('company', () => {
    const component = renderer.create(
        <Company clients={data} name='Velcom'/>
    );

    let three = component.toJSON();
    expect(three).toMatchSnapshot();

    const filter = component.root.find(input => input.props.className === 'filter').children;
    filter.forEach(input => {
        input.props.onClick();
        three = component.toJSON();
        expect(three).toMatchSnapshot();
    })
});