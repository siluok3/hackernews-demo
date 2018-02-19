const jwt = require('jsonwebtoken');

const APP_SECRET = 'stravostomis';

module.exports = {
    APP_SECRET
};

function getUserId(context) {
    const Authorization = context.request.get('Authorization');
    if(Authorization) {
        //Get rid of the Bearer prefix on the Authorization Header
        const token = Authorization.replace('Bearer', '');
        const { userId } = jwt.verify(token, APP_SECRET);

        return userId;
    }
    throw new Error('eeeerroooorrrr');
}

module.exports = {
    APP_SECRET,
    getUserId
};