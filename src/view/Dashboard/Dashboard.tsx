import * as React from 'react';
import Header from '../../components/Header/Header';
import {AppService} from '../../services/app.service';
import AddRepoButton from '../../components/AddRepoButton/AddRepoButton';

export class Dashboard extends React.Component {
  render() {
    return (
        <div>
          <Header />
          <AddRepoButton title='Add Repo'/>
        </div>
    );
  }

  componentDidMount() {
    AppService.fetchPosts()
    .then(data =>  console.log('data', data))
    .catch((error) => console.log('Error in fetching data', error));
  }
}