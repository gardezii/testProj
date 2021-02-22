module.exports = {
    errorResponse: (res, status, desc, message) => {
        return res.status(status).json({
            statusCode: status,
            description: desc,
            message: message

        })
    },

    errorResponseFields: (res, status, error, message, description) => {
        return res.status(status).json({
            statusCode: status,
            message: message,
            description: description,
            data: [
                ...error
            ]
        })
    },

    successResponse: (res, status = 200, desc, message, payload) => {
        return res.status(status).json({
            data: payload,
            message: message,
            statusCode: status,
            description: desc
        })
    }
}
