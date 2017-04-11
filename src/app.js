import React from 'react';
import {browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router} from './Router';
import {store} from './store/configureStore';

const history = syncHistoryWithStore(browserHistory, store);

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} />
      </Provider>
    );
  }
}
