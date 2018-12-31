import * as React from 'react';
import './Homepage.scss';
import Button from 'reactstrap/lib/Button';
export class Homepage extends React.Component {

  render() {
    return (
        <div className='home-page'>
          <h2>Welcome to PR Dashboard</h2>
          <br/>
          <Button color='success'>Get Started</Button>
        </div>
    );
  }
}