
'use strict';

let initialState = {};

export default (state=initialState, action) => {

  let {type, payload} = action;

  switch(type) {

  case 'INIT':
    return payload || initialState;

  case 'CREATE':
    return payload;

  case 'SET_PROFILE':
    return payload;
    
  case 'UPDATE':
    return Object.assign(state,payload);

  case 'DELETE':
    return initialState;

  case 'RESET':
    return initialState;

  default:
    return state;
  }

};
