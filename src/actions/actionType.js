import {createAction} from 'redux-actions'
import {
    TYPE_POST_SUCCESS,
    TYPE_POST_ERROR,
    TYPE_POST,
    CHANGE_TYPE,
    ADD_TYPE,
    ADD_TYPE_SUCCESSS,
    ADD_TYPE_ERROR
} from './types.js'

require('es6-promise').polyfill();
require('isomorphic-fetch');

const action = {}
action[TYPE_POST_SUCCESS] = createAction(TYPE_POST_SUCCESS)
action[TYPE_POST_ERROR] = createAction(TYPE_POST_ERROR)
action[CHANGE_TYPE] = createAction(CHANGE_TYPE)

action[ADD_TYPE_SUCCESSS] = createAction(ADD_TYPE_SUCCESSS)
action[ADD_TYPE_ERROR] = createAction(ADD_TYPE_ERROR)

action[TYPE_POST] = (function (action, TYPE_POST_SUCCESS, TYPE_POST_ERROR) {
    return function (params) {
        return (dispatch) => {
            return fetch('/api/types/find', {method: 'post'}).then(function (response) {
                if (response.status >= 400) {
                    dispatch(action[TYPE_POST_ERROR](new Error("Bad response from server")))
                }
                return response.json();
            }).then((res) => {
                dispatch(action[TYPE_POST_SUCCESS](res))
            })
        }
    }
})(action, TYPE_POST_SUCCESS, TYPE_POST_ERROR)

action[ADD_TYPE] = function (params) {
    return (dispatch) => {
        return fetch("/api/types/add", {
            method: 'post', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
            .then(function (response) {
                if (response.status >= 400) {
                    dispatch(action[ADD_TYPE_ERROR](new Error("Bad response from server")))
                }
                return response.json();
            }).then((res) => {
                return res
            })
    }
}


module.exports = action
