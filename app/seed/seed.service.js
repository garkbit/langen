"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
exports.INITIAL = 1234567890;
var SeedService = (function () {
    function SeedService() {
        var _this = this;
        this.history = [];
        this.get = function () {
            _this.history.push(_this.val);
            _this.val = SeedService.hash(_this.val);
            return _this.val;
        };
        this.set = function (val) {
            if (val === void 0) { val = exports.INITIAL; }
            _this.history.push(_this.val);
            _this.val = SeedService.hash(val);
        };
        this.val = SeedService.hash(exports.INITIAL);
    }
    SeedService.hash = function (input) {
        if (input === void 0) { input = exports.INITIAL; }
        var str = input.toString();
        var hash = 0;
        for (var i = str.length - 1; i >= 0; i--) {
            var chr = parseInt(str.charAt(i));
            hash = ((hash << 5) - hash) + chr;
            hash |= 0;
        }
        hash = Math.abs(hash);
        return hash;
    };
    SeedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SeedService);
    return SeedService;
}());
exports.SeedService = SeedService;
//# sourceMappingURL=seed.service.js.map