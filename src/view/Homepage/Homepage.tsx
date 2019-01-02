import * as React from 'react';
import Button from 'reactstrap/lib/Button';
import {withRouter} from 'react-router-dom';
import './Homepage.scss';

class Homepage extends React.Component<any, {}> {

  render() {
    return (
        <div className='home-page text-center'>
          <h2>Welcome to PR Dashboard</h2>
          <br/>
          <Button onClick={this.routeToDashboard} color='success'>
            Get Started
          </Button>
        </div>
    );
  }

  routeToDashboard = () => {
    this.props.history.push('/dashboard');
  }
}
export default withRouter(Homepage);