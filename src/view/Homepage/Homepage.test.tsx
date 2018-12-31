import * as React from 'react';
import {configure, shallow} from 'enzyme';
import {Homepage} from './Homepage';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<Homepage />', () => {

  let wrapper;
  it('renders Homepage component without crashing ', () => {
    wrapper = shallow(<Homepage />);
    expect(wrapper.find('h2').html()).toEqual('<h2>Welcome to PR Dashboard</h2>');
  });

});