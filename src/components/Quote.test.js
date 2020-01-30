import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Quote color="#fff" quote="quote" author="author" />);
  });

  it('renders quote', () => {
    expect(wrapper.find('#text-div').length).toEqual(1);
  });

  it('renders author', () => {
    expect(wrapper.find('#author').length).toEqual(1);
  });

  it('has animate state field', () => {
    expect(typeof wrapper.state().animate).toBe('boolean');
  });
});
