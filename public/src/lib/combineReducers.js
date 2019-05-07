import {combineReducers} from 'redux';

import profileReducer from '../components/profile/profilereducer.js';
import authReducer from '../components/auth/authreducer.js';
import orderReducer from '../components/orders/reducer.js';


export default combineReducers({
  auth: authReducer,
  orders: orderReducer,
  profile: profileReducer,
});
