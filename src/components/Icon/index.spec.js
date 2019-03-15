import React from 'react';
import Icon from './index';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const props = {
  iconSize: 'xs',
  icon: {},
  iconColor: 'default',
};

describe('<Icon />', () => {
  const wrapper = shallowWrapper(Icon)(props);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a FontAwesomeIcon component', () => {
    expect(wrapper.find(FontAwesomeIcon).exists()).toBeTruthy();
  });
});
