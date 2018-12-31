import * as React from 'react';
import Button from 'reactstrap/lib/Button';
import {Redirect} from 'react-router';

import './Homepage.scss';

export class Homepage extends React.Component<{}, {toDashboard: boolean}> {

  constructor(props: any) {
    super(props);
    this.state = {
      toDashboard: false
    };
    this.routeToDashboard = this.routeToDashboard.bind(this);
  }

  render() {
    if (this.state.toDashboard) {
      return <Redirect from='/' to='/dashboard' />
    }
    return (
        <div className='home-page'>
          <h2>Welcome to PR Dashboard</h2>
          <br/>
          <Button onClick={this.routeToDashboard} color='success'>
            Get Started
          </Button>
        </div>
    );
  }

  routeToDashboard() {
    this.setState({toDashboard: !this.state.toDashboard});
  }
}