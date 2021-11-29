
const PROXY_CONFIG  = [
    {
        context: ['/api'],
        target: 'https://clinicaspuc.herokuapp.com/',
        secure: true,
        logLevel: 'debug',
        pathRewrite: {'^/api':''}

    }
];

module.exports = PROXY_CONFIG;
