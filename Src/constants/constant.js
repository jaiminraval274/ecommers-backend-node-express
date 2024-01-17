
const isLog = true;
const VALIDATION_ERROR = 400;
const UNAUTHRIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const SERVER_ERROR = 500;

const Log = (title, message) => {
    if (isLog === true) {
        console.log(`${title} : ${message}`);
    }
}

module.exports = {
    Log,
    isLog,
    VALIDATION_ERROR,
    UNAUTHRIZED,
    FORBIDDEN,
    NOT_FOUND,
    SERVER_ERROR,
}