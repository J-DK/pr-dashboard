import * as React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Dashboard} from './Dashboard';

configure({adapter: new Adapter()});
describe('<Dashboard />', () => {

  let wrapper;
  it('renders Dashboard component without crashing ', () => {
    wrapper = shallow(<Dashboard />);
    expect(wrapper.find('h2').html()).toEqual('<h2>Here is your dashboard</h2>');
  });

});