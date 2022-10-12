"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.SyncService = void 0;
var common_1 = require("@nestjs/common");
var schedule_1 = require("@nestjs/schedule");
var slugify_1 = require("slugify");
var convert_html_to_slate_1 = require("./convert-html-to-slate");
var node_fetch_1 = require("node-fetch");
var items = new Set();
var SyncService = /** @class */ (function () {
    function SyncService(reatch, wepublish, prisma) {
        this.reatch = reatch;
        this.wepublish = wepublish;
        this.prisma = prisma;
        this.logger = new common_1.Logger(SyncService_1.name);
    }
    SyncService_1 = SyncService;
    SyncService.prototype.syncArticles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reatchArticles, _i, _a, entry;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.wepublish.authenticate()];
                    case 1:
                        _b.sent();
                        this.logger.log('Syncing articles');
                        return [4 /*yield*/, this.reatch.getArticles()];
                    case 2:
                        reatchArticles = _b.sent();
                        _i = 0, _a = reatchArticles.data.entries;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        entry = _a[_i];
                        if (!entry) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.syncEntry(entry)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SyncService.prototype.syncEntry = function (entry) {
        return __awaiter(this, void 0, void 0, function () {
            var mappingEntry, article, authorIds, _i, _a, author, _b, _c, _d, _e, _f;
            var _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        this.logger.log('Syncing entry id#' + entry.id);
                        return [4 /*yield*/, this.prisma.entry.findUnique({
                                where: {
                                    reatchEntryId: entry.id
                                }
                            })];
                    case 1:
                        mappingEntry = _h.sent();
                        if (!!mappingEntry) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.wepublish.createArticle({
                                title: entry.title
                            })];
                    case 2:
                        article = _h.sent();
                        return [4 /*yield*/, this.prisma.entry.create({
                                data: {
                                    reatchEntryId: entry.id,
                                    wepublishArticleId: article.id
                                }
                            })];
                    case 3:
                        mappingEntry = _h.sent();
                        _h.label = 4;
                    case 4:
                        authorIds = [];
                        _i = 0, _a = entry.entryAuthor;
                        _h.label = 5;
                    case 5:
                        if (!(_i < _a.length)) return [3 /*break*/, 8];
                        author = _a[_i];
                        _c = (_b = authorIds).push;
                        return [4 /*yield*/, this.syncArticleAuthor(author)];
                    case 6:
                        _c.apply(_b, [(_h.sent()).wepublishAuthorId]);
                        _h.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 5];
                    case 8:
                        _e = (_d = this.wepublish).updateArticle;
                        _g = {
                            id: mappingEntry.wepublishArticleId
                        };
                        _f = [{}];
                        return [4 /*yield*/, this.mapEntryToArticleInput(entry)];
                    case 9: return [4 /*yield*/, _e.apply(_d, [(_g.input = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { authorIDs: authorIds }]),
                                _g)])];
                    case 10:
                        _h.sent();
                        return [4 /*yield*/, this.wepublish.publishArticle({
                                id: mappingEntry.wepublishArticleId,
                                updatedAt: entry.postDate,
                                publishAt: entry.postDate,
                                publishedAt: entry.postDate
                            })];
                    case 11:
                        _h.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SyncService.prototype.syncArticleAuthor = function (entryAuthor) {
        return __awaiter(this, void 0, void 0, function () {
            var authorMapping, name, input, author;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.logger.log('Syncing author id#' + entryAuthor.id);
                        this.logger.log({ entryAuthor: entryAuthor });
                        return [4 /*yield*/, this.prisma.author.findUnique({
                                where: {
                                    reatchUserId: entryAuthor.id
                                }
                            })];
                    case 1:
                        authorMapping = _b.sent();
                        name = entryAuthor.firstname + ' ' + entryAuthor.lastname;
                        _a = {
                            name: name,
                            slug: (0, slugify_1["default"])(name)
                        };
                        return [4 /*yield*/, (0, convert_html_to_slate_1.convertHtmlToSlate)(entryAuthor.shortBio)];
                    case 2:
                        input = (_a.bio = _b.sent(),
                            _a.jobTitle = entryAuthor["function"],
                            _a);
                        if (!!authorMapping) return [3 /*break*/, 5];
                        this.logger.log('Creating author id#' + entryAuthor.id);
                        return [4 /*yield*/, this.wepublish.createAuthor({ input: input })];
                    case 3:
                        author = _b.sent();
                        return [4 /*yield*/, this.prisma.author.create({
                                data: {
                                    wepublishAuthorId: author.id,
                                    reatchUserId: entryAuthor.id
                                }
                            })];
                    case 4:
                        authorMapping = _b.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.wepublish.updateAuthor({
                            id: authorMapping.wepublishAuthorId,
                            input: input
                        })];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [2 /*return*/, authorMapping];
                }
            });
        });
    };
    SyncService.prototype.syncImage = function (asset) {
        return __awaiter(this, void 0, void 0, function () {
            var imageMapping, result, image, _a, _b, _c;
            var _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.prisma.image.findUnique({
                            where: {
                                reatchAssetId: asset.id
                            }
                        })];
                    case 1:
                        imageMapping = _f.sent();
                        if (!!imageMapping) return [3 /*break*/, 6];
                        return [4 /*yield*/, (0, node_fetch_1["default"])('https://reatch.ch' + asset.url)];
                    case 2:
                        result = _f.sent();
                        _b = (_a = this.wepublish).uploadImage;
                        _d = {};
                        _e = {
                            title: asset.title
                        };
                        _c = node_fetch_1.File.bind;
                        return [4 /*yield*/, result.blob()];
                    case 3: return [4 /*yield*/, _b.apply(_a, [(_d.input = (_e.file = new (_c.apply(node_fetch_1.File, [void 0, [_f.sent()], asset.filename]))(),
                                _e),
                                _d)])];
                    case 4:
                        image = _f.sent();
                        return [4 /*yield*/, this.prisma.image.create({
                                data: {
                                    wepublishImageId: image.id,
                                    reatchAssetId: asset.id
                                }
                            })];
                    case 5:
                        imageMapping = _f.sent();
                        _f.label = 6;
                    case 6: return [2 /*return*/, imageMapping.wepublishImageId];
                }
            });
        });
    };
    SyncService.prototype.createImageBlockFromAsset = function (asset) {
        return __awaiter(this, void 0, void 0, function () {
            var imageID;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.syncImage(asset)];
                    case 1:
                        imageID = _a.sent();
                        return [2 /*return*/, {
                                image: {
                                    imageID: imageID,
                                    caption: asset.title
                                }
                            }];
                }
            });
        });
    };
    SyncService.prototype.mapEntryToArticleInput = function (entry) {
        return __awaiter(this, void 0, void 0, function () {
            var blocks, _i, _a, image, _b, _c, _d, _e, block, blockBlocks;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        blocks = [];
                        blocks.push({
                            title: {
                                title: entry.title,
                                lead: entry.entryLead
                            }
                        });
                        _i = 0, _a = entry.entryImage;
                        _f.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        image = _a[_i];
                        _c = (_b = blocks).push;
                        return [4 /*yield*/, this.createImageBlockFromAsset(image)];
                    case 2:
                        _c.apply(_b, [_f.sent()]);
                        _f.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        _d = 0, _e = entry.contentBlocks;
                        _f.label = 5;
                    case 5:
                        if (!(_d < _e.length)) return [3 /*break*/, 8];
                        block = _e[_d];
                        return [4 /*yield*/, this.mapBlock(block)];
                    case 6:
                        blockBlocks = _f.sent();
                        blocks.push.apply(blocks, blockBlocks.filter(function (e) { return e; }));
                        _f.label = 7;
                    case 7:
                        _d++;
                        return [3 /*break*/, 5];
                    case 8: return [2 /*return*/, {
                            title: entry.title + 'test',
                            tags: [],
                            seoTitle: entry.metaTitle,
                            slug: entry.slug,
                            properties: [],
                            socialMediaAuthorIDs: [],
                            hideAuthor: false,
                            blocks: blocks,
                            shared: true,
                            authorIDs: [],
                            breaking: false,
                            lead: entry.entryLead,
                            canonicalUrl: entry.url
                        }];
                }
            });
        });
    };
    SyncService.prototype.mapBlock = function (block) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, blocks, _i, _b, image, _c, _d, _e, _f, html, _g, _h, source;
            var _j, _k, _l, _m, _o, _p, _q, _r;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        _a = block.__typename;
                        switch (_a) {
                            case 'contentBlocks_text_BlockType': return [3 /*break*/, 1];
                            case 'contentBlocks_accordionBlock_BlockType': return [3 /*break*/, 1];
                            case 'contentBlocks_imageText_BlockType': return [3 /*break*/, 3];
                            case 'contentBlocks_textBlockWithLabel_BlockType': return [3 /*break*/, 10];
                            case 'contentBlocks_peopleBlockWithLabel_BlockType': return [3 /*break*/, 12];
                            case 'contentBlocks_standardDescriptionBlock_BlockType': return [3 /*break*/, 13];
                            case 'contentBlocks_sources_BlockType': return [3 /*break*/, 14];
                        }
                        return [3 /*break*/, 16];
                    case 1:
                        if (!block.text) {
                            return [2 /*return*/, []];
                        }
                        _j = {};
                        _k = {};
                        return [4 /*yield*/, (0, convert_html_to_slate_1.convertHtmlToSlate)(block.text)];
                    case 2: return [2 /*return*/, [
                            (_j.richText = (_k.richText = _s.sent(),
                                _k),
                                _j)
                        ]];
                    case 3:
                        blocks = [];
                        _i = 0, _b = block.image;
                        _s.label = 4;
                    case 4:
                        if (!(_i < _b.length)) return [3 /*break*/, 7];
                        image = _b[_i];
                        _d = (_c = blocks).push;
                        return [4 /*yield*/, this.createImageBlockFromAsset(image)];
                    case 5:
                        _d.apply(_c, [_s.sent()]);
                        _s.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7:
                        if (!block.text) return [3 /*break*/, 9];
                        _f = (_e = blocks).push;
                        _l = {};
                        _m = {};
                        return [4 /*yield*/, (0, convert_html_to_slate_1.convertHtmlToSlate)(block.text)];
                    case 8:
                        _f.apply(_e, [(_l.richText = (_m.richText = _s.sent(),
                                _m),
                                _l)]);
                        _s.label = 9;
                    case 9: return [2 /*return*/, blocks];
                    case 10:
                        _o = {};
                        _p = {};
                        return [4 /*yield*/, (0, convert_html_to_slate_1.convertHtmlToSlate)("<h3>".concat(block.heading, "</h3>").concat(block.textContent))];
                    case 11: return [2 /*return*/, [
                            (_o.richText = (_p.richText = _s.sent(),
                                _p),
                                _o)
                        ]];
                    case 12: return [2 /*return*/, []];
                    case 13: return [2 /*return*/, []];
                    case 14:
                        html = '';
                        html += "<h3>".concat(block.heading, "</h3>");
                        html += "<ul>";
                        for (_g = 0, _h = block.sources; _g < _h.length; _g++) {
                            source = _h[_g];
                            // source;
                            html += "<li>[".concat(source.nr, "] ").concat(source.text, "</li>");
                        }
                        html += "</ul>";
                        _q = {};
                        _r = {};
                        return [4 /*yield*/, (0, convert_html_to_slate_1.convertHtmlToSlate)(html)];
                    case 15: return [2 /*return*/, [
                            (_q.richText = (_r.richText = _s.sent(),
                                _r),
                                _q)
                        ]];
                    case 16:
                        items.add(block.__typename);
                        return [2 /*return*/, []];
                }
            });
        });
    };
    var SyncService_1;
    __decorate([
        (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_30_SECONDS)
    ], SyncService.prototype, "syncArticles");
    SyncService = SyncService_1 = __decorate([
        (0, common_1.Injectable)()
    ], SyncService);
    return SyncService;
}());
exports.SyncService = SyncService;
