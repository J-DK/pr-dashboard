import * as React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header'

configure({adapter: new Adapter()});
describe('<Header />', () => {

  let wrapper;
  it('renders Header component without crashing ', () => {
    wrapper = shallow(<Header />);
    expect(wrapper.find('h4').html()).toEqual('<h4 class="pr-header"> Pull Request Dashboard </h4>');
  });

});