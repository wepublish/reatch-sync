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
exports.convertHtmlToSlate = void 0;
var slate_1 = require("slate");
var slate_hyperscript_1 = require("slate-hyperscript");
var sanitize_url_1 = require("@braintree/sanitize-url");
var TAG;
(function (TAG) {
    TAG["heading-one"] = "heading-one";
    TAG["heading-two"] = "heading-two";
    TAG["heading-three"] = "heading-three";
    TAG["paragraph"] = "paragraph";
    TAG["unordered-list"] = "unordered-list";
    TAG["ordered-list"] = "ordered-list";
    TAG["list-item"] = "list-item";
    TAG["link"] = "link";
    TAG["table"] = "table";
    TAG["table-row"] = "table-row";
    TAG["table-cell"] = "table-cell";
})(TAG || (TAG = {}));
var ELEMENT_TAGS = {
    LI: function () { return ({ type: TAG['list-item'] }); },
    OL: function () { return ({ type: TAG['ordered-list'] }); },
    UL: function () { return ({ type: TAG['unordered-list'] }); },
    P: function () { return ({ type: TAG['paragraph'] }); },
    A: function (el) {
        return __assign({ type: TAG['link'], url: (0, sanitize_url_1.sanitizeUrl)(el.getAttribute('href')) }, (el.hasAttribute('title') && { title: el.getAttribute('title') }));
    },
    BLOCKQUOTE: function () { return ({ type: TAG.paragraph }); },
    H1: function () { return ({ type: TAG['heading-one'] }); },
    H2: function () { return ({ type: TAG['heading-two'] }); },
    H3: function () { return ({ type: TAG['heading-three'] }); },
    H4: function () { return ({ type: TAG['heading-three'] }); },
    H5: function () { return ({ type: TAG['heading-three'] }); },
    H6: function () { return ({ type: TAG['heading-three'] }); },
    TABLE: function () { return ({ type: TAG['table'] }); },
    // THEAD: () => ({ type: 'table_head' }),
    // TBODY: () => ({ type: 'table_body' }),
    TR: function () { return ({ type: TAG['table-row'] }); },
    TD: function () { return ({ type: TAG['table-cell'] }); },
    // TH: () => ({ type: 'table_header_cell' }),
    IMG: function (el) {
        var title = Boolean(el.getAttribute('alt'))
            ? el.getAttribute('alt')
            : Boolean(el.getAttribute('title'))
                ? el.getAttribute('title')
                : '(Image)';
        return {
            text: title
        };
    },
    PRE: function () { return ({ type: TAG['paragraph'] }); },
    IFRAME: function (el) {
        var src = el.getAttribute('src');
        if (!src)
            return {};
        var height = el.getAttribute('height');
        var width = el.getAttribute('width');
        return {
            type: 'iframe',
            url: src,
            // default iframe height is 150
            height: Number(height || 150),
            // default iframe width is 300
            width: Number(width || 300),
            children: [
                {
                    text: ''
                },
            ]
        };
    }
};
var TEXT_TAGS = {
    CODE: function () { return ({ code: true }); },
    EM: function () { return ({ italic: true }); },
    I: function () { return ({ italic: true }); },
    STRONG: function () { return ({ bold: true }); },
    U: function () { return ({ underline: true }); }
};
function deserialize(el, global) {
    var _a, _b, _c;
    if (el.nodeType === 3) {
        return el.textContent;
    }
    else if (el.nodeType !== 1) {
        return null;
    }
    else if (el.nodeName === 'BR') {
        // wrap parentless breaks in a paragraph
        if (((_a = el.parentElement) === null || _a === void 0 ? void 0 : _a.nodeName) === 'BODY') {
            return (0, slate_hyperscript_1.jsx)('element', { type: TAG['paragraph'] }, [{ text: '' }]);
        }
        else {
            return '\n';
        }
    }
    var nodeName = el.nodeName;
    var parent = el;
    if (nodeName === 'PRE' &&
        el.childNodes[0] &&
        el.childNodes[0].nodeName === 'CODE') {
        parent = el.childNodes[0];
    }
    var children = Array.from(parent.childNodes)
        .map(function (c) { return deserialize(c, global); })
        .flat();
    if (children.length === 0) {
        if (!['COLGROUP', 'COL', 'CAPTION', 'TFOOT'].includes(nodeName)) {
            var textNode = (0, slate_hyperscript_1.jsx)('text', {}, '');
            children = [textNode];
        }
    }
    if (el.nodeName === 'BODY') {
        return (0, slate_hyperscript_1.jsx)('fragment', {}, children);
    }
    if (isElementNode(el) &&
        Array.from(el.attributes).find(function (attr) { return attr.name === 'role' && attr.value === 'heading'; })) {
        var level = (_b = el.attributes.getNamedItem('aria-level')) === null || _b === void 0 ? void 0 : _b.value;
        switch (level) {
            case '1': {
                return (0, slate_hyperscript_1.jsx)('element', { type: TAG['heading-one'] }, children);
            }
            case '2': {
                return (0, slate_hyperscript_1.jsx)('element', { type: TAG['heading-two'] }, children);
            }
            case '3': {
                return (0, slate_hyperscript_1.jsx)('element', { type: TAG['heading-three'] }, children);
            }
            case '4': {
                return (0, slate_hyperscript_1.jsx)('element', { type: TAG['heading-three'] }, children);
            }
            case '5': {
                return (0, slate_hyperscript_1.jsx)('element', { type: TAG['heading-three'] }, children);
            }
            case '6': {
                return (0, slate_hyperscript_1.jsx)('element', { type: TAG['heading-three'] }, children);
            }
            default:
                break;
        }
    }
    if (ELEMENT_TAGS[nodeName]) {
        var attrs = ELEMENT_TAGS[nodeName](el);
        // li children must be rendered in spans, like in list plugin
        if (nodeName === 'LI') {
            var hasNestedListChild = children.find(function (item) {
                return slate_1.Element.isElement(item) &&
                    // if element has a nested list as a child, all children must be wrapped in individual list-item-child nodes
                    // TODO: sync with GCMS types for Slate elements
                    (item.type === TAG['ordered-list'] ||
                        item.type === TAG['unordered-list']);
            });
            if (hasNestedListChild) {
                var wrappedChildren = children.map(function (item) {
                    return (0, slate_hyperscript_1.jsx)('element', { type: TAG['list-item'] }, item);
                });
                return (0, slate_hyperscript_1.jsx)('element', attrs, wrappedChildren);
            }
            // in any case we add a single list-item-child containing the children
            var child = (0, slate_hyperscript_1.jsx)('element', { type: TAG['list-item'] }, children);
            return (0, slate_hyperscript_1.jsx)('element', attrs, [child]);
        }
        else if (nodeName === 'TR') {
            if (((_c = el.parentElement) === null || _c === void 0 ? void 0 : _c.nodeName) === 'THEAD' &&
                el.cells.length === 0) {
                return [
                    {
                        type: TAG['table-cell'],
                        children: [
                            {
                                type: TAG['paragraph'],
                                children: [{ text: el.textContent ? el.textContent : '' }]
                            },
                        ]
                    },
                ];
            }
            // if TR is empty, insert a cell with a paragraph to ensure selection can be placed inside
            var modifiedChildren = el.cells.length === 0
                ? [
                    {
                        type: TAG['table-cell'],
                        children: [
                            {
                                type: TAG['paragraph'],
                                children: [{ text: el.textContent ? el.textContent : '' }]
                            },
                        ]
                    },
                ]
                : children;
            return (0, slate_hyperscript_1.jsx)('element', attrs, modifiedChildren);
        }
        else if (nodeName === 'TD' || nodeName === 'TH') {
            // if TD or TH is empty, insert a paragraph to ensure selection can be placed inside
            var childNodes = Array.from(el.childNodes);
            if (childNodes.length === 0) {
                return (0, slate_hyperscript_1.jsx)('element', attrs, [
                    {
                        type: TAG['paragraph'],
                        children: [{ text: '' }]
                    },
                ]);
            }
            else {
                var children_1 = childNodes.map(function (c) { return deserialize(c, global); }).flat();
                return (0, slate_hyperscript_1.jsx)('element', attrs, children_1);
            }
        }
        else if (nodeName === 'IMG') {
            return (0, slate_hyperscript_1.jsx)('text', attrs);
        }
        return (0, slate_hyperscript_1.jsx)('element', attrs, children);
    }
    if (nodeName === 'DIV') {
        var childNodes = Array.from(el.childNodes);
        var isParagraph = childNodes.every(function (child) {
            return (isElementNode(child) && isInlineElement(child)) || isTextNode(child);
        });
        if (isParagraph) {
            return (0, slate_hyperscript_1.jsx)('element', { type: TAG['paragraph'] }, children);
        }
    }
    if (nodeName === 'SPAN') {
        var parentElement = el.parentElement;
        // Handle users copying parts of paragraphs
        // When they copy multiple paragraphs we don't need to do anything, because all spans have block parents in that case
        if (!parentElement || parentElement.nodeName === 'BODY') {
            return (0, slate_hyperscript_1.jsx)('element', { type: TAG['paragraph'] }, children);
        }
        var element = el;
        // handles italic, bold and undeline that are not expressed as tags
        // important for pasting from Google Docs
        var attrs_1 = getSpanAttributes(element);
        if (attrs_1) {
            return children.map(function (child) {
                if (typeof child === 'string') {
                    return (0, slate_hyperscript_1.jsx)('text', attrs_1, child);
                }
                if (isChildNode(child, global))
                    return child;
                if (slate_1.Element.isElement(child) && !slate_1.Text.isText(child)) {
                    child.children = child.children.map(function (c) { return (__assign(__assign({}, c), attrs_1)); });
                    return child;
                }
                return child;
            });
        }
    }
    if (TEXT_TAGS[nodeName]) {
        var attrs_2 = TEXT_TAGS[nodeName](el);
        return children.map(function (child) {
            if (typeof child === 'string') {
                return (0, slate_hyperscript_1.jsx)('text', attrs_2, child);
            }
            if (isChildNode(child, global))
                return child;
            if (slate_1.Element.isElement(child) && !slate_1.Text.isText(child)) {
                child.children = child.children.map(function (c) { return (__assign(__assign({}, c), attrs_2)); });
                return child;
            }
            return child;
        });
    }
    // general fallback
    // skips unsupported tags and prevents block-level element nesting
    return children;
}
/*
  CKEditor's Word normalizer functions
  Tried importing @ckeditor/ckeditor5-paste-from-office, but it depends on a lot of ckeditor packages we don't need, so decided on just copying these three functions that we need
*/
// https://github.com/ckeditor/ckeditor5/blob/bce8267e16fccb25448b4c68acc3bf54336aa087/packages/ckeditor5-paste-from-office/src/filters/space.js#L57
function normalizeSafariSpaceSpans(htmlString) {
    return htmlString.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g, function (_, spaces) {
        return spaces.length === 1
            ? ' '
            : Array(spaces.length + 1)
                .join('\u00A0 ')
                .substring(0, spaces.length + 1);
    });
}
// https://github.com/ckeditor/ckeditor5/blob/bce8267e16fccb25448b4c68acc3bf54336aa087/packages/ckeditor5-paste-from-office/src/filters/space.js#L19
function normalizeSpacing(htmlString) {
    // Run normalizeSafariSpaceSpans() two times to cover nested spans.
    return (htmlString
        // Remove all \r\n from "spacerun spans" so the last replace line doesn't strip all whitespaces.
        .replace(/(<span\s+style=['"]mso-spacerun:yes['"]>[^\S\r\n]*?)[\r\n]+([^\S\r\n]*<\/span>)/g, '$1$2')
        .replace(/<span\s+style=['"]mso-spacerun:yes['"]><\/span>/g, '')
        .replace(/ <\//g, '\u00A0</')
        .replace(/ <o:p><\/o:p>/g, '\u00A0<o:p></o:p>')
        // Remove <o:p> block filler from empty paragraph. Safari uses \u00A0 instead of &nbsp;.
        .replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g, '')
        // Remove all whitespaces when they contain any \r or \n.
        .replace(/>([^\S\r\n]*[\r\n]\s*)</g, '><'));
}
// https://github.com/ckeditor/ckeditor5/blob/bce8267e16fccb25448b4c68acc3bf54336aa087/packages/ckeditor5-paste-from-office/src/filters/parse.js#L102
function cleanContentAfterBody(htmlString) {
    var bodyCloseTag = '</body>';
    var htmlCloseTag = '</html>';
    var bodyCloseIndex = htmlString.indexOf(bodyCloseTag);
    if (bodyCloseIndex < 0) {
        return htmlString;
    }
    var htmlCloseIndex = htmlString.indexOf(htmlCloseTag, bodyCloseIndex + bodyCloseTag.length);
    return (htmlString.substring(0, bodyCloseIndex + bodyCloseTag.length) +
        (htmlCloseIndex >= 0 ? htmlString.substring(htmlCloseIndex) : ''));
}
function normalizeHtml(html) {
    return cleanContentAfterBody(normalizeSpacing(html));
}
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#node_type_constants
// An Element node like <p> or <div>
function isElementNode(node) {
    return node.nodeType === 1;
}
// The actual Text inside an Element or Attr
function isTextNode(node) {
    return node.nodeType === 3;
}
function isChildNode(node, global) {
    return node instanceof global.Node;
}
function isInlineElement(element) {
    var allInlineElements = [
        'a',
        'abbr',
        'audio',
        'b',
        'bdi',
        'bdo',
        'br',
        'button',
        'canvas',
        'cite',
        'code',
        'data',
        'datalist',
        'del',
        'dfn',
        'em',
        'embed',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'label',
        'map',
        'mark',
        'meter',
        'noscript',
        'object',
        'output',
        'picture',
        'progress',
        'q',
        'ruby',
        's',
        'samp',
        'script',
        'select',
        'slot',
        'small',
        'span',
        'strong',
        'sub',
        'sup',
        'template',
        'textarea',
        'time',
        'u',
        'var',
        'video',
        'wbr',
    ];
    return allInlineElements.includes(element.tagName.toLowerCase());
}
function getSpanAttributes(element) {
    var names = [];
    if (element.style.textDecoration === 'underline') {
        names.push('U');
    }
    if (element.style.fontStyle === 'italic') {
        names.push('EM');
    }
    if (parseInt(element.style.fontWeight, 10) > 400 ||
        element.style.fontWeight === 'bold') {
        names.push('STRONG');
    }
    if (names.length === 0)
        return null;
    var attrs = names.reduce(function (acc, current) {
        return __assign(__assign({}, acc), TEXT_TAGS[current]());
    }, {});
    return attrs;
}
var parseDomDocument = function (normalizedHTML) { return __awaiter(void 0, void 0, void 0, function () {
    var jsdom, dom;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(typeof window !== 'undefined' && window.DOMParser)) return [3 /*break*/, 1];
                return [2 /*return*/, new DOMParser().parseFromString(normalizedHTML, 'text/html')];
            case 1: return [4 /*yield*/, Promise.resolve().then(function () { return require('jsdom'); })];
            case 2:
                jsdom = _a.sent();
                dom = new jsdom.JSDOM(normalizedHTML, { contentType: 'text/html' });
                return [2 /*return*/, dom.window.document];
        }
    });
}); };
function convertHtmlToSlate(html) {
    return __awaiter(this, void 0, void 0, function () {
        var normalizedHTML, domDocument, global;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!html) {
                        return [2 /*return*/, undefined];
                    }
                    normalizedHTML = normalizeHtml(html);
                    return [4 /*yield*/, parseDomDocument(normalizedHTML)];
                case 1:
                    domDocument = _a.sent();
                    return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (typeof window !== 'undefined')
                                            return [2 /*return*/, window];
                                        return [4 /*yield*/, Promise.resolve().then(function () { return require('jsdom'); }).then(function (jsdom) { return new jsdom.JSDOM().window; })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })()];
                case 2:
                    global = _a.sent();
                    return [2 /*return*/, deserialize(domDocument.body, global)];
            }
        });
    });
}
exports.convertHtmlToSlate = convertHtmlToSlate;
