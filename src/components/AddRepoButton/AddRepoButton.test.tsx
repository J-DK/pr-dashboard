import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddRepoButton from './AddRepoButton';

configure({adapter: new Adapter()});
describe('<AddRepoButton />', () => {
  let wrapper: any, title: string;

  beforeEach(() => {
    title = 'Add Repo';
    wrapper = mount(<AddRepoButton title={title}/>);
  });

  it(' should check the title of the button ', () => {
    expect(wrapper.find('.btn-title').text()).toBe(title);
    expect(wrapper.props().title).toBe(title);
  });
});