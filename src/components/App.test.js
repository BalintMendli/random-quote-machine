import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Quote from './Quote';
import ButtonBox from './ButtonBox';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders Quote component', () => {
    expect(wrapper.find(Quote).length).toEqual(1);
  });

  it('renders ButtonBox component', () => {
    expect(wrapper.find(ButtonBox).length).toEqual(1);
  });

  it('renders footer', () => {
    expect(wrapper.find('.footer').length).toEqual(1);
  });

  it('has quote, author, color state fields', () => {
    expect(typeof wrapper.state().quote).toBe('string');
    expect(typeof wrapper.state().author).toBe('string');
    expect(typeof wrapper.state().color).toBe('string');
  });
});

test('changes quote on button click', () => {
  const wrapper = mount(<App />);
  const quote = wrapper.find('#text').text();
  wrapper.find('#new-quote').simulate('click');
  expect(wrapper.find('#text').text()).not.toEqual(quote);
});
