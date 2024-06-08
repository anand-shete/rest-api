const fs = require('fs');
const moment = require('moment');;

logReqRes = (filename) => {
    return (req, res, next) => {
        const date = new moment();
        let ip = req.ip;
        if (ip == '::1') ip = '127.0.0.1';
        fs.appendFile(filename,
            `\n${date.format('DD MMM YY hh:mm a')}, '${req.method}',  '${ip}',  ${req.path}`,
            (err, data) => {
                if (err) console.log('Error in appending File', err);
            });
        next();
    }
}
module.exports = logReqRes; 