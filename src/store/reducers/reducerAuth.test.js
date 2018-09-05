import reducerAuth from './reducerAuth';
import actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
   it('should return the initial state', () => {
       expect(reducerAuth(undefined, {})).toEqual({
           token: null,
           userId: null,
           error: null,
           loading: false,
           authRedirectPath: '/'
       });
   });

   it('should store the token up on login', () => {
       expect(reducerAuth({
           token: null,
           userId: null,
           error: null,
           loading: false,
           authRedirectPath: '/'
       }, {
           type: actionTypes.AUTH_SUCCESS,
           idToken: 'some-token',
           userId: 'some-user-id'
       })).toEqual({
           token: 'some-token',
           userId: 'some-user-id',
           error: null,
           loading: false,
           authRedirectPath: '/'
       });
   });
});