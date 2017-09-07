import {combineReducers} from 'redux'

import Home from './home'
import Types from './types'
import editer from './editer'

module.exports = combineReducers(
    {
        home: Home,
        types: Types,
        editer: editer
    }
)