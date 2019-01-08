var exec = require('cordova/exec');

// module.exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'PaymentGateway', 'coolMethod', [arg0]);
// };

module.exports.add = function (arg0,succes, error)
{
    exec(succes , error , 'PaymentGateway' , 'add' , [arg0]); 
}

module.exports.substract = function (arg0,succes, error)
{
    exec(succes , error , 'PaymentGateway' , 'substract' , [arg0]); 
}