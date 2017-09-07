const home_reducer = function (state = {
    message: '',
    HEADER_POPUP_SHOW: false
}, actions) {
    switch (actions.type) {
        case "POST_SUCCESS":
            return Object.assign({}, state, {message: actions.payload})
        case "POST_ERROR":
            return Object.assign({}, state, {message: actions.payload})
        default:
            return state;
            break;
    }
}
module.exports = home_reducer