"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReatchModule = void 0;
var common_1 = require("@nestjs/common");
var reatch_service_1 = require("./reatch.service");
var core_1 = require("@apollo/client/core");
var cross_fetch_1 = require("cross-fetch");
var reatch_controller_1 = require("./reatch.controller");
var ReatchModule = /** @class */ (function () {
    function ReatchModule() {
    }
    ReatchModule = __decorate([
        (0, common_1.Module)({
            providers: [
                reatch_service_1.ReatchService,
                {
                    provide: reatch_service_1.ReatchService.ApolloClient,
                    useFactory: function () {
                        var reatchUri = 'https://reatch.ch/index.php?p=admin/actions/graphql/';
                        return new core_1.ApolloClient({
                            uri: reatchUri,
                            cache: new core_1.InMemoryCache(),
                            link: new core_1.HttpLink({
                                uri: reatchUri,
                                fetch: cross_fetch_1.fetch
                            })
                        });
                    }
                },
            ],
            controllers: [reatch_controller_1.ReatchController],
            exports: [reatch_service_1.ReatchService]
        })
    ], ReatchModule);
    return ReatchModule;
}());
exports.ReatchModule = ReatchModule;
