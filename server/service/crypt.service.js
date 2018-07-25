var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var password = 'testpassword123';

class CryptService {
    constructor () {
        if(!CryptService.instance) {
            CryptService.instance = this;
        }

        return CryptService.instance;
    }

    encrypt(encryptString) {
        
    }
}

const instance = new CryptService();
Object.freeze(instance);

module.exports = instance;