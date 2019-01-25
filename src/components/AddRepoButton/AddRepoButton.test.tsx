import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddRepoButton from './AddRepoButton';

configure({adapter: new Adapter()});
describe('<AddRepoButton />', () => {
  let wrapper: any, clickFn: any, title: string;

  beforeEach(() => {
    title = 'Add Repo';
    clickFn = jest.fn();
    wrapper = mount(<AddRepoButton title={title} onClick={clickFn}/>);
  });

  it(' should check the title of the button ', () => {
    expect(wrapper.find('.btn-title').text()).toBe(title);
    expect(wrapper.props().title).toBe(title);
  });

  it(' should call onClick of button ', () => {
    const button = wrapper.find('.btn-icon');
    expect(clickFn.mock.calls.length).toEqual(0);
    button.simulate('click');
    expect(clickFn.mock.calls.length).toEqual(1);
  });
});