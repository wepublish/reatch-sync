"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ReatchService = void 0;
var common_1 = require("@nestjs/common");
var core_1 = require("@apollo/client/core");
var ReatchService = /** @class */ (function () {
    function ReatchService(client) {
        this.client = client;
    }
    ReatchService_1 = ReatchService;
    ReatchService.prototype.getArticles = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.query({
                            query: (0, core_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        query MyQuery {\n          entries(\n            typeId: 2\n            orderBy: \"postDate desc\"\n            postDate: \">= 2022-05-21T10:00:00+02:00\"\n          ) {\n            id\n            title\n            level\n            sectionHandle\n            sectionId\n            postDate\n            slug\n            ... on publications_publication_Entry {\n              id\n              entryAuthor {\n                id\n                firstname\n                lastname\n                shortBio\n                email\n                customNameLink\n                customLink\n                function\n              }\n              slug\n              metaTitle\n              uri\n              url\n              title\n              entryImage {\n                id\n                title\n                url\n                filename\n              }\n              entryLead\n              contentBlocks {\n                __typename\n                ... on contentBlocks_text_BlockType {\n                  id\n                  text\n                }\n                ... on contentBlocks_imageText_BlockType {\n                  id\n                  text\n                  image {\n                    id\n                    title\n                    url\n                    filename\n                  }\n                }\n                ... on contentBlocks_textBlockWithLabel_BlockType {\n                  id\n                  heading\n                  textContent\n                  uri\n                }\n                ... on contentBlocks_accordionBlock_BlockType {\n                  id\n                  heading\n                  text\n                }\n                #                ... on contentBlocks_standardDescriptionBlock_BlockType {\n                #                  id\n                #                  entry {\n                #                    id\n                #                    ... on standardDescriptions_default_Entry {\n                #                      text\n                #                    }\n                #                  }\n                #                }\n                ... on contentBlocks_sources_BlockType {\n                  id\n                  heading\n                  sources {\n                    __typename\n                    ... on sources_BlockType {\n                      id\n                      nr\n                      text\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      "], ["\n        query MyQuery {\n          entries(\n            typeId: 2\n            orderBy: \"postDate desc\"\n            postDate: \">= 2022-05-21T10:00:00+02:00\"\n          ) {\n            id\n            title\n            level\n            sectionHandle\n            sectionId\n            postDate\n            slug\n            ... on publications_publication_Entry {\n              id\n              entryAuthor {\n                id\n                firstname\n                lastname\n                shortBio\n                email\n                customNameLink\n                customLink\n                function\n              }\n              slug\n              metaTitle\n              uri\n              url\n              title\n              entryImage {\n                id\n                title\n                url\n                filename\n              }\n              entryLead\n              contentBlocks {\n                __typename\n                ... on contentBlocks_text_BlockType {\n                  id\n                  text\n                }\n                ... on contentBlocks_imageText_BlockType {\n                  id\n                  text\n                  image {\n                    id\n                    title\n                    url\n                    filename\n                  }\n                }\n                ... on contentBlocks_textBlockWithLabel_BlockType {\n                  id\n                  heading\n                  textContent\n                  uri\n                }\n                ... on contentBlocks_accordionBlock_BlockType {\n                  id\n                  heading\n                  text\n                }\n                #                ... on contentBlocks_standardDescriptionBlock_BlockType {\n                #                  id\n                #                  entry {\n                #                    id\n                #                    ... on standardDescriptions_default_Entry {\n                #                      text\n                #                    }\n                #                  }\n                #                }\n                ... on contentBlocks_sources_BlockType {\n                  id\n                  heading\n                  sources {\n                    __typename\n                    ... on sources_BlockType {\n                      id\n                      nr\n                      text\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      "])))
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var ReatchService_1;
    ReatchService.ApolloClient = Symbol();
    ReatchService = ReatchService_1 = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, common_1.Inject)(ReatchService_1.ApolloClient))
    ], ReatchService);
    return ReatchService;
}());
exports.ReatchService = ReatchService;
var templateObject_1;
