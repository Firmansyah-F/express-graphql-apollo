const { baseResponse } = require("../helpers/baseResponse")

const notFound = (req, res) => {
    const urlOrigin = req.orginalUrl;
    return baseResponse({
        success: false,
        message: ` SORRY ${urlOrigin} NOT FOUND !` ,
    })(res, 404);
};

module.exports = { notFound }