const { VALIDATION_ERROR, UNAUTHRIZED, FORBIDDEN, NOT_FOUND, SERVER_ERROR, Log } = require("../constants/constant");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case VALIDATION_ERROR:
            res.json({ message: `${res.message}`, statuscode: constants.VALIDATION_ERROR });
            Log('Validation Error', res.message);
            break;
        case UNAUTHRIZED:
            res.json({ message: `${res.message}`, statuscode: constants.UNAUTHRIZED });
            Log('UNAUTHRIZED', res.message);
            break;
        case FORBIDDEN:
            res.json({ message: "FORBIDDEN", statuscode: constants.FORBIDDEN });
            Log('FORBIDDEN', res.message);
            break;
        case NOT_FOUND:
            res.json({ message: "page route not found", statuscode: constants.NOT_FOUND });
            Log('NOT_FOUND', res.message);
            break;
        case SERVER_ERROR:
            res.json({ message: "Server error", statuscode: constants.NOT_FOUND });
            Log('SERVER_ERROR', res.message);
            break;
        default:
            Log('No Error', 'working fine');
            break;
    }
}

module.exports = errorHandler;