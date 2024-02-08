const fs = require('fs');

logReqRes = (filename) =>{
   return (req,res,next)=>{
    fs.appendFile(
        filename,
        `\n${new Date()} : ${req.method}  ${req.ip}  ${req.path}`,
        (err, data) => {
            next();
        }); 
   }
}
module.exports = logReqRes; 