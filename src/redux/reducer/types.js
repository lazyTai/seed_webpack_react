import {handleActions} from 'redux-actions'
import {
    TYPE_POST_SUCCESS,
    TYPE_POST_ERROR,
    CHANGE_TYPE
} from '../../actions/types.js'

const reducer = handleActions({
    [TYPE_POST_SUCCESS]: (state, action) => (Object.assign({}, state, {typeRows: action.payload})),
    [TYPE_POST_ERROR]: (state, action) => (Object.assign({}, state, {errorMessage: action.payload})),
    [CHANGE_TYPE]: (state, action) => (Object.assign({}, state, {selectTyped: action.payload})),
}, {
    typeRows: [],
    errorMessage: '',
    selectTyped: {}
})

module.exports = reducer