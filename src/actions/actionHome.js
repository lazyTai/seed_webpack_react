const POST_SUCCESS = function (payload) {
    return {
        type: "POST_SUCCESS",
        payload: payload
    }
}
const POST_ERROR = function (payload) {
    return {
        type: "POST_ERROR",
        payload: payload
    }
}


const POST = function (params) {
    return (dispatch) => {
        return fetch('http://localhost:8888/hello.json').then((res) => {
            return res.json()
        }).then((res) => {
            dispatch(POST_SUCCESS(res))
        }).catch((err) => {
            dispatch(POST_ERROR(err))
        })
    }
}

const GO_BACK_HOME = function () {

}

module.exports = {
    POST_SUCCESS: POST_SUCCESS,
    POST_ERROR: POST_ERROR,
    POST: POST,

    GO_BACK_HOME: GO_BACK_HOME
}
