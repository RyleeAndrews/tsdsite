'use strict';

let initialState = {};

export default (state=initialState, action) => {

  let {type, payload} = action;

  switch(type) {

  case 'ORDER_INIT':
    return payload || initialState;

  case 'ORDER_CREATE':
    console.log('payload', payload);
    return payload;

  case 'ORDER_UPDATE':
    return Object.assign(state,payload);

  case 'ORDER_DELETE':
    return initialState;

  case 'ORDER_RESET':
    return initialState;

  default:
    return state;
  }

};
