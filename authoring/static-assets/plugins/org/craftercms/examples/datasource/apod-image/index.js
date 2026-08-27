/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var APOD_ENDPOINT = 'https://api.nasa.gov/planetary/apod';
var DEFAULT_API_KEY = 'DEMO_KEY';
function readApiKey(record) {
    var _a;
    var raw = (_a = record === null || record === void 0 ? void 0 : record.properties) === null || _a === void 0 ? void 0 : _a.apiKey;
    if (raw == null || String(raw).trim() === '')
        return DEFAULT_API_KEY;
    return String(raw).trim();
}
/** Fetches today's (or optional date) APOD entry from NASA Open APIs. */
function fetchApod(apiKey_1) {
    return __awaiter(this, arguments, void 0, function (apiKey, options) {
        var params, response, body, data;
        if (options === void 0) { options = {}; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = new URLSearchParams({ api_key: apiKey });
                    if (options.date)
                        params.set('date', options.date);
                    return [4 /*yield*/, fetch("".concat(APOD_ENDPOINT, "?").concat(params.toString()))];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.text().catch(function () { return ''; })];
                case 2:
                    body = _a.sent();
                    throw new Error("NASA APOD request failed (".concat(response.status, " ").concat(response.statusText, ")").concat(body ? ": ".concat(body) : ''));
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    data = _a.sent();
                    if (Array.isArray(data)) {
                        if (!data.length)
                            throw new Error('NASA APOD returned an empty list.');
                        return [2 /*return*/, data[0]];
                    }
                    if (!data || typeof data !== 'object') {
                        throw new Error('NASA APOD returned an unexpected payload.');
                    }
                    return [2 /*return*/, data];
            }
        });
    });
}
var apodImageDataSourceModule = {
    apiVersion: 1,
    type: 'apod-image',
    interfaces: ['apod-image'],
    capabilities: ['list'],
    create: function (_a) {
        var record = _a.record;
        var apiKey = readApiKey(record);
        function getApod(options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, fetchApod(apiKey, options)];
                });
            });
        }
        return {
            id: record.id,
            type: 'apod-image',
            title: record.title,
            interfaces: ['apod-image'],
            capabilities: ['list'],
            getActions: function () { return []; },
            list: function () {
                return __awaiter(this, void 0, void 0, function () {
                    var apod;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getApod()];
                            case 1:
                                apod = _a.sent();
                                return [2 /*return*/, [{ key: apod.url, value: apod.title, apod: apod }]];
                        }
                    });
                });
            }
        };
    }
};

/**
 * FE2 data-source plugin — NASA Astronomy Picture of the Day (APOD).
 *
 * Locator (form-definition): pluginId=org.craftercms.examples type=datasource name=apod-image filename=index.js
 * Asset path: /static-assets/plugins/org/craftercms/examples/datasource/apod-image/index.js
 */
var plugin = {
    /** Runtime registry identity — not the same as form-definition locator `pluginId`. */
    id: 'org.craftercms.examples.datasource',
    dataSources: {
        /** Key must equal module.type and form-definition <type> */
        'apod-image': apodImageDataSourceModule
    }
};

export { plugin as default };
