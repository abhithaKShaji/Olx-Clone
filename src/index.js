import React from 'react';
import ReactDOM from 'react-dom';
import {firebaseContext} from './store/context'
import App from './App';
import Context from './store/context';
import {firebase} from './firebase/config'


ReactDOM.render(
<firebaseContext.Provider value={{firebase}}>
  <Context>
  <App />
  </Context>
</firebaseContext.Provider>,
   document.getElementById('root'));
