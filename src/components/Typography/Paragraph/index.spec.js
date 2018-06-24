import React from 'react';
import Paragraph from './index';

const props = {
  color: 'light',
  color: 'black',
  copy: 'test',
};

describe('<Paragraph />', () => {
  const wrapper = shallowWrapper(Paragraph)(props);
  
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the text', () => {
    expect(wrapper.find('p').text()).toEqual(props.copy);
  });
  
});
