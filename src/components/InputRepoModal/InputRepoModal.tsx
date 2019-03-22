import * as React from 'react';
import {IInputRepoModalProps, IInputRepoModalState} from './index';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';
import Input from 'reactstrap/lib/Input'
import InputGroup from 'reactstrap/lib/InputGroup';
import InputGroupAddon from 'reactstrap/lib/InputGroupAddon';
import Button from 'reactstrap/lib/Button';

import {AppService} from '../../services/app.service';

import './InputRepoModal.scss';

export class InputRepoModal extends React.Component<IInputRepoModalProps, IInputRepoModalState> {

  public state: IInputRepoModalState;

  constructor(props: IInputRepoModalProps) {
    super(props);

    this.state = {
      userOptions: [],
      repoOptions: [],
      user: '',
      repo: '',
      repoList: []
    }
  }

  handleUserChange = (event: any) => {
    this.setState({
      user: event.target.value
    });
    const text = event.target.value;
    if (text.length > 2) {
      AppService.fetchUsers(text)
      .then(data => {
        let options: any = [];
        data.items.forEach((x: any) => {
          let option = (<option key={options.length} value={x.login}/>);
          options.push(option);
        });
        this.setState({
          userOptions: options
        });
      })
      .catch((error) => console.error('Error in fetching users list', error));
    }
  };

  handleRepoChange = (event: any) => {
    this.setState({
      repo: event.target.value
    });
  };

  handleBlur = () => {
    AppService.fetchUserRepos(this.state.user)
    .then(data => {
      let repos: any = [];
      data.forEach((x: any) => {
        let repo = (<option key={repos.length} value={x.name}/>);
        repos.push(repo);
      });
      this.setState({
        repoOptions: repos
      });
    })
    .catch((error) => console.error(`Error in fetching repositories for the user ${this.state.user}`, error));
  };

  render() {

    return (
        <Modal isOpen={this.props.showModal} toggle={this.props.onClick}>
          <ModalHeader toggle={this.props.onClick}>
            <label style={{color: "#17a2b8"}}>Search...</label>
          </ModalHeader>
          <ModalBody>
            <div className="d-flex flex-column justify-content-around input-fields">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <Button type="button" color="info" className="user"> User </Button>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Enter User or Organization name" list="user-suggestions"
                           value={this.state.user} onChange={this.handleUserChange}
                           onBlur={this.handleBlur} required/>
                    <datalist id="user-suggestions">
                      {this.state.userOptions}
                    </datalist>
                  </InputGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <Button type="button" color="info"> Repo </Button>
                    </InputGroupAddon>
                    <Input placeholder="Enter Repository name" list="repo-suggestions"
                           value={this.state.repo} onChange={this.handleRepoChange}
                    disabled={this.state.user === ''}/>
                    <datalist id="repo-suggestions">
                      {this.state.repoOptions}
                    </datalist>
                  </InputGroup>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button> Cancel </Button>
            <Button color="danger"> Add </Button>
          </ModalFooter>
        </Modal>
    );
  }
}
