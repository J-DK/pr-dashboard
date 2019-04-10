import * as React from 'react';
import Header from '../../components/Header/Header';
import {AppService} from '../../services/app.service';
import AddRepoButton from '../../components/AddRepoButton/AddRepoButton';
import {InputRepoModal} from '../../components/InputRepoModal/InputRepoModal';
import {IDashboardState} from './index';

export class Dashboard extends React.Component<{}, IDashboardState> {

  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  toggle = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  getPRs = (fullName: string) => {
    AppService.fetchPRs(fullName)
    .then(data =>  console.log('length', data.length))
    .catch((error) => console.log('Error in fetching Pull Request Info', error));
  };

  render() {
    return (
        <div>
          <Header />
          <AddRepoButton title='Add Repo' onClick={this.toggle}/>
          <InputRepoModal sendFullName={this.getPRs} showModal={this.state.showModal} onClick={this.toggle} onHide={this.toggle}/>
        </div>
    );
  }

  componentDidMount() {
    AppService.fetchPosts()
    .then(data =>  console.log('data', data))
    .catch((error) => console.log('Error in fetching data', error));
  }
}