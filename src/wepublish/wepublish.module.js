"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WepublishModule = void 0;
var common_1 = require("@nestjs/common");
var wepublish_service_1 = require("./wepublish.service");
var core_1 = require("@apollo/client/core");
var cross_fetch_1 = require("cross-fetch");
var wepublish_configuration_1 = require("./wepublish-configuration");
var WepublishModule = /** @class */ (function () {
    function WepublishModule() {
    }
    WepublishModule = __decorate([
        (0, common_1.Module)({
            providers: [
                wepublish_service_1.WepublishService,
                {
                    provide: wepublish_configuration_1.WepublishConfiguration,
                    useValue: {
                        username: process.env.WEPUBLISH_USERNAME,
                        password: process.env.WEPUBLISH_PASSWORD
                    }
                },
                {
                    provide: wepublish_service_1.WepublishService.ApolloClient,
                    inject: [wepublish_configuration_1.WepublishConfiguration],
                    useFactory: function (config) {
                        var authMiddleware = new core_1.ApolloLink(function (operation, forward) {
                            var token = config === null || config === void 0 ? void 0 : config.token;
                            operation.setContext({
                                headers: {
                                    authorization: token ? "Bearer ".concat(token) : ''
                                }
                            });
                            return forward(operation);
                        });
                        var wepublishUri = process.env.WEPUBLISH_URI;
                        return new core_1.ApolloClient({
                            uri: wepublishUri,
                            cache: new core_1.InMemoryCache(),
                            link: (0, core_1.concat)(authMiddleware, new core_1.HttpLink({
                                uri: wepublishUri,
                                fetch: cross_fetch_1.fetch
                            }))
                        });
                    }
                },
            ],
            exports: [wepublish_service_1.WepublishService]
        })
    ], WepublishModule);
    return WepublishModule;
}());
exports.WepublishModule = WepublishModule;
