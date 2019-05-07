import superagent from 'superagent';
import cookie from 'react-cookies';

let API = `${__API_URL__}`;

export const orderInitialize = () => dispatch => {

  superagent.get(API)
    .set('Authorization', 'Bearer ' + bearerToken())
    .then(res => dispatch(initAction(res.body)) )
    .catch(console.error);

};

export const orderCreate = payload => dispatch => {

  superagent.post(`${API}/postorder`)
    .set('Authorization', 'Bearer ' + bearerToken())
    .send(payload)
    .then(res => dispatch(createAction(res.body)) )
    .catch(console.error);

};

const createAction = order => ({
  type: 'ORDER_CREATE',
  payload: order,
});

const bearerToken = () => {
  return cookie.load('auth');
};

const initAction = list => ({
  type: 'ORDER_INIT',
  payload: list,
});
