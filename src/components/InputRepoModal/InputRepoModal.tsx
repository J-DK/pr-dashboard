import * as React from 'react';
import {IInputRepoModalProps} from './index';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';

export class InputRepoModal extends React.Component<IInputRepoModalProps, {}> {

  constructor(props: any) {
    super(props);
  }

  render() {

    return (
        <Modal isOpen={this.props.showModal} toggle={this.props.onClick}>
          <ModalHeader toggle={this.props.onClick}/>
          <ModalBody>Modal Body</ModalBody>
          <ModalFooter>
            Modal Footer
          </ModalFooter>
        </Modal>
    );
  }
}
