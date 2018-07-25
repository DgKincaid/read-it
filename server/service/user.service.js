var User = require('../model/User');
var CryptService = require('./crypt.service');

class UserService {
    constructor(){
        if(!UserService.instance){
            UserService.instance = this;
        }

        return UserService.instance;
    }

    save(user){
        var newUser = new User(user);

        newUser.save((err, data) => {
            if(err) console.log(err);
            else console.log(data);
        });
    };
}

const instance = new UserService();
Object.freeze(instance);

module.exports = instance;