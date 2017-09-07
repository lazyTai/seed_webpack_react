import {createAction} from 'redux-actions'
import {
    TYPE_POST_SUCCESS,
    TYPE_POST_ERROR,
    TYPE_POST
} from './types.js'

require('es6-promise').polyfill();
require('isomorphic-fetch');

var action = {}
action[TYPE_POST_SUCCESS] = createAction(TYPE_POST_SUCCESS)
action[TYPE_POST_ERROR] = createAction(TYPE_POST_ERROR)
action[TYPE_POST] = function (params) {
    return (dispatch) => {
        return fetch(/*'/api/types/find'*/'http://localhost:8888/hello.json', {method: 'post'}).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then((res) => {
            dispatch(action[TYPE_POST_SUCCESS](res))
        }).catch((err) => {
            dispatch(action[TYPE_POST_ERROR](err))
        })
    }
}


module.exports = action
