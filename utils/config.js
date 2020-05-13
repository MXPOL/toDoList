if(process.env.NODE_ENV === 'dev' || process.env.NODE_ENV ==='test') {
    require('dotenv').config();
}




let PORT = process.env.PORT || 3030;
let MONGODB_URI = process.env.MONGODB_URL;

if(process.env.NODE_ENV === 'test'){
    MONGODB_URI = process.env.TEST_MONGODB_URI;
}


module.exports = {
    MONGODB_URI,
    PORT
}

