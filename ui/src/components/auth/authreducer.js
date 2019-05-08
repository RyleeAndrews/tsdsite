let defaultState = {init: true};

export default (state=defaultState, action) => {
  let {type,payload} = action;

  switch(type){
  case 'SET_AUTH_TOKEN':
    return {token:payload};

  case 'SET_AUTH_USER':
    return payload;

  case 'DELETE_AUTH_TOKEN':
    console.log(defaultState);
    return defaultState;

  case "UPDATE_USER": {
    return {
      user: payload,
    };
  }

  case "DELETE_USER": {
    return Object.assign({...state,payload});
  }

  default:
    return state;

  }
};
