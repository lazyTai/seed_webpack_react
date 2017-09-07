import {createAction} from 'redux-actions'
import {
    EDITER_TITLE,
    EDITER_CONTENT,
} from './types.js'

require('es6-promise').polyfill();
require('isomorphic-fetch');

const action = {}
action[EDITER_TITLE] = createAction(EDITER_TITLE)
action[EDITER_CONTENT] = createAction(EDITER_CONTENT)





module.exports = action
