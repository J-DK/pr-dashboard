import * as React from 'react';
import {configure, shallow} from 'enzyme';
import {Homepage} from './Homepage';
import Adapter from 'enzyme-adapter-react-16';
import Button from 'reactstrap/lib/Button';

configure({adapter: new Adapter()});
describe('<Homepage />', () => {

  let wrapper: any;
  it('renders Homepage component without crashing ', () => {
    wrapper = shallow(<Homepage />);
    expect(wrapper.find('h2').html()).toEqual('<h2>Welcome to PR Dashboard</h2>');
  });

  it('should route to dashboard component on button click', () => {
    expect(wrapper.state().toDashboard).toBeFalsy();
    let btn = wrapper.find(Button);
    btn.simulate('click');
    expect(wrapper.state().toDashboard).toBeTruthy();
  });
});