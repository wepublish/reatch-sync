"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var wepublish_module_1 = require("./wepublish/wepublish.module");
var reatch_module_1 = require("./reatch/reatch.module");
var sync_module_1 = require("./sync/sync.module");
var schedule_1 = require("@nestjs/schedule");
var prisma_module_1 = require("./prisma/prisma.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                prisma_module_1.PrismaModule,
                wepublish_module_1.WepublishModule,
                reatch_module_1.ReatchModule,
                sync_module_1.SyncModule,
                schedule_1.ScheduleModule.forRoot(),
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
