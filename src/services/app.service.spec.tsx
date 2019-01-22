import * as React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {AppService} from './app.service';
import fetchMock from 'fetch-mock';

configure({adapter: new Adapter()});
describe('App Service', () => {

  beforeEach(() => {
      fetchMock.restore();
  });

  it('should fetch the posts ', async () => {
    fetchMock.get('http://localhost:3001/posts', [{
        "title": "CopyRight Automatico",
        "tags": "[JS]"
      }]);
    const data = await AppService.fetchPosts();
    expect(fetchMock.called('http://localhost:3001/posts')).toBeTruthy();
    expect(data.length).toEqual(1);
  });

});