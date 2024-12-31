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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const microservices_1 = require("@nestjs/microservices");
const app_dto_1 = require("./app.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    findAll() {
        return this.appService.findAll();
    }
    async createUser(data) {
        return this.appService.createUser(data);
    }
    async findAllUsers() {
        return this.appService.findAllUsers();
    }
};
exports.AppController = AppController;
__decorate([
    (0, microservices_1.MessagePattern)('findAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('createUser'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [app_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createUser", null);
__decorate([
    (0, microservices_1.MessagePattern)('findAllUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAllUsers", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map