
'use strict';

import superagent from 'superagent';
import cookie from 'react-cookies';

export const authLogin = (user={}) => dispatch => {

  let token = cookie.load("auth");

  let authMethod = () => authenticateUsingBasic(user); // {}

  if ( token ) { authMethod = () => authenticateUsingToken(token);}


  return authMethod()
    .then(res => {
      dispatch(setUser(res.body));
      return res;
    })
    .catch( e => console.error('Authenticaton Error:', e.message) );
};

let authenticateUsingToken = token => {

  return superagent.get(`${__AUTH_URL__}/validate`)
    .set('Authorization', 'Bearer ' + token);
};

let authenticateUsingBasic = user => {

  return superagent.get(`${__AUTH_URL__}/login`)
    .withCredentials()
    .auth(user.username, user.password);
};


export const authCreateAccount = user => dispatch => {

  return superagent.post(`${__AUTH_URL__}/create`)
    .withCredentials()
    .send(user)
    .then(res => {
      dispatch(setUser(res.body));
      return res;
    })
    .catch( e => console.error('Authenticaton Error:', e.message) );
};

export const updateUser = payload => dispatch => {

  let token = cookie.load('auth');
  console.log('hol', payload);

  let URL =  `${__API_URL__}/auth/${payload._id}`;

  superagent.put(URL)
    .set('Authorization', "Bearer " + token)
    .then( res => {
      dispatch(updateUserAction(res.body));
      console.log(res);
    })
    .catch( error => {
      console.error(error.message);
    })
};


export const authLogout = () => ({
  type: "DELETE_AUTH_TOKEN",
});

export const setUser = auth => ({
  type: "SET_AUTH_USER",
  payload: auth
});

export const updateUserAction = auth => ({
  type: 'UPDATE_USER',
  payload: auth,
});
