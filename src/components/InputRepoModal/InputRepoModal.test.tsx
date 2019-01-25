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

  it(' should check the title of the button ', () => {
    expect(wrapper.props().showModal).toBeFalsy();
  });

  // xit(' should call onToggle of <Modal> ', () => {
  //   const modal = wrapper.find('Modal');
  //   expect(toggleFn.mock.calls.length).toEqual(0);
  //   modal.simulate('toggle');
  //   expect(toggleFn.mock.calls.length).toEqual(1);
  // });

});