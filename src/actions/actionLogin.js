import {createAction} from 'redux-actions'
import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from './types.js'

require('es6-promise').polyfill();
require('isomorphic-fetch');

const action = {}
action[LOGIN_SUCCESS] = createAction(LOGIN_SUCCESS)
action[LOGIN_ERROR] = createAction(LOGIN_ERROR)
action[LOGIN] = function (params) {
    return (dispatch) => {
        return fetch('/api/users/login',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'post',
                body: JSON.stringify(params)
            }
        ).then((res) => {
            if (res.status > 403) {
                // todo:dispatch(action[LOGIN_ERROR](err))
                throw new Error("请求出问题")
            }
            return res.json()
        }).then((res) => {
            // todo:dispatch(action[LOGIN_SUCCESS](res))
            return res;
        })
    }
}


module.exports = action

