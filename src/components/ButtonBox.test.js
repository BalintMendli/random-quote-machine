import React from 'react';
import { shallow } from 'enzyme';
import ButtonBox from './ButtonBox';

describe('ButtonBox component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ButtonBox
        color="#fff"
        quote="quote"
        author="author"
        changeQuote={jest.fn()}
      />,
    );
  });

  it('renders twitter button', () => {
    expect(wrapper.find('#tweet-quote').length).toEqual(1);
  });

  it('renders tumblr button', () => {
    expect(wrapper.find('#tumblr').length).toEqual(1);
  });

  it('renders new quote button', () => {
    expect(wrapper.find('#new-quote').length).toEqual(1);
  });

  it('has animate state field', () => {
    expect(typeof wrapper.state().init).toBe('boolean');
  });
});
