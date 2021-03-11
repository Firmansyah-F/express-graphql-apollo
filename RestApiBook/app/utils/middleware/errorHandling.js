const errorHandler = (error, req, res, next) => {
    const payloadError = {
        success: false,
        message: error.message,
        data: error,
    };
    return res.json(payloadError);
}
module.exports = { errorHandler }