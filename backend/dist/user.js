"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "uraquitan@syx.com.br": new User("uraquitan@syx.com.br", "Uraquitan", "123456"),
    "abutroviski@gmail.com": new User("abutroviski@gmail.com", "Abutroviski", "123456"),
};
//# sourceMappingURL=user.js.map