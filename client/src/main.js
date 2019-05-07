import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import createStore from './lib/store.js';
const store = createStore();
import App from './components/app.js';

class Main extends React.Component {
  constructor(props){
    super(props);
  }

  componentMount(){
    store.subscribe(() => console.log('STORE', store.getState()));
  }
  render(){
    return(
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

ReactDom.render(<Main/>, document.getElementById('root'));
