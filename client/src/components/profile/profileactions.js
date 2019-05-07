import superagent from 'superagent';
import cookie from 'react-cookies';



let API = `${__API_URL__}`;

export const profileLoad = payload => dispatch => {

  superagent.get(`${API}/profile/${payload._id}}`)
    .set('Authorization', 'Bearer ' + bearerToken())
    .then( res =>
      dispatch(setProfile(res.body)))
    .catch(console.error);

};

export const profileInitialize = () => dispatch => {

  superagent.get(`${API}/profile/profile`)
    .set('Authorization', 'Bearer ' + bearerToken())
    .then( res =>
      dispatch(initAction(res.body)) )
    .catch(console.error);
};

export const profileCreate = payload => dispatch => {

  superagent.post(`${API}/postprofile`)
    .set('Authorization', 'Bearer ' + bearerToken())
    .send(payload)
    .then(res => dispatch(createAction(res.body)) )
    .catch(console.error);

};

export const updateProfile = payload => dispatch => {

  let URL = `${API}/${payload._id}`;
  console.log(payload);
  superagent.put(URL)
    .set('Authorization', 'Bearer ' + bearerToken())
    .send(payload)
    .then(res => dispatch(updateAction(res.body)) )
    .catch(console.error);

};


export const categoryDelete = payload => dispatch => {

  let URL = `${API}/${payload._id}`;

  superagent.delete(URL)
    .send(payload)
    .then(res => {
      console.log('!!!!', payload)
      dispatch(deleteAction(payload));
    })
    .catch(console.error);
};

const bearerToken = () => {
  return cookie.load('auth');
};

const initAction = profile => ({
  type: 'INIT',
  payload: profile,
});

const createAction = profile => ({
  type: 'CREATE',
  payload: profile,
});

const updateAction = profile => ({
  type: 'UPDATE',
  payload: profile,
});

const setProfile = profile => ({
  type: 'SET_PROFILE',
  payload: profile,
});

export const resetProfile = () => ({
  type: 'RESET',
});
