import {handleActions} from 'redux-actions'
import {
    EDITER_TITLE,
    EDITER_CONTENT,
} from '../../actions/types.js'
import deepmerge from 'deepmerge'

const reducer = handleActions({
    [EDITER_TITLE]: (state, action) => (deepmerge(state, {artitle: {title: action.payload}})),
    [EDITER_CONTENT]: (state, action) => (deepmerge(state, {artitle: {content: action.payload}})),
}, {
    artitle: {title: '', content: ''},
})

module.exports = reducer