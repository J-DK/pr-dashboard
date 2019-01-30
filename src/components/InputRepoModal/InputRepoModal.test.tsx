import * as React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {InputRepoModal} from './InputRepoModal';

configure({adapter: new Adapter()});
describe('<InputRepoModal />', () => {
  let wrapper: any,
      toggleFn: any,
      showModal: boolean;

  beforeEach(() => {
    toggleFn = jest.fn();
    showModal = false;
    wrapper = mount(<InputRepoModal showModal={showModal} onClick={toggleFn} onHide={toggleFn}/>);
  });

  afterEach(() => {
    toggleFn.mockReset();
  });

  it(' should check if the modal is shown ', () => {
    expect(wrapper.props().showModal).toBeFalsy();
  });

  it(' should check the props passed ', () => {
    const modal = wrapper.find('Modal');
    expect(modal.props().isOpen).toBeFalsy();
    expect(modal.props().toggle).toBe(toggleFn);
  });

});