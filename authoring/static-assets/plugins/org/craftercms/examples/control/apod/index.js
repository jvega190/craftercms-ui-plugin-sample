const { jsx, jsxs } = craftercms.libs?.reactJsxRuntime;
const { useState, useEffect, useMemo, useCallback } = craftercms.libs.React;
const Alert = craftercms.libs.MaterialUI.Alert && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Alert, 'default') ? craftercms.libs.MaterialUI.Alert['default'] : craftercms.libs.MaterialUI.Alert;
const Box = craftercms.libs.MaterialUI.Box && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Box, 'default') ? craftercms.libs.MaterialUI.Box['default'] : craftercms.libs.MaterialUI.Box;
const Card = craftercms.libs.MaterialUI.Card && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Card, 'default') ? craftercms.libs.MaterialUI.Card['default'] : craftercms.libs.MaterialUI.Card;
const CardContent = craftercms.libs.MaterialUI.CardContent && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.CardContent, 'default') ? craftercms.libs.MaterialUI.CardContent['default'] : craftercms.libs.MaterialUI.CardContent;
const CardMedia = craftercms.libs.MaterialUI.CardMedia && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.CardMedia, 'default') ? craftercms.libs.MaterialUI.CardMedia['default'] : craftercms.libs.MaterialUI.CardMedia;
const Stack = craftercms.libs.MaterialUI.Stack && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Stack, 'default') ? craftercms.libs.MaterialUI.Stack['default'] : craftercms.libs.MaterialUI.Stack;
const Typography = craftercms.libs.MaterialUI.Typography && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Typography, 'default') ? craftercms.libs.MaterialUI.Typography['default'] : craftercms.libs.MaterialUI.Typography;
const Tooltip = craftercms.libs.MaterialUI.Tooltip && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Tooltip, 'default') ? craftercms.libs.MaterialUI.Tooltip['default'] : craftercms.libs.MaterialUI.Tooltip;
const IconButton = craftercms.libs.MaterialUI.IconButton && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.IconButton, 'default') ? craftercms.libs.MaterialUI.IconButton['default'] : craftercms.libs.MaterialUI.IconButton;
const DeleteOutlineOutlinedIcon = craftercms.utils.constants.components.get('@mui/icons-material/DeleteOutlineOutlined') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/DeleteOutlineOutlined'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/DeleteOutlineOutlined')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/DeleteOutlineOutlined');
const VisibilityOutlinedIcon = craftercms.utils.constants.components.get('@mui/icons-material/VisibilityOutlined') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/VisibilityOutlined'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/VisibilityOutlined')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/VisibilityOutlined');
const CachedOutlinedIcon = craftercms.utils.constants.components.get('@mui/icons-material/CachedOutlined') && Object.prototype.hasOwnProperty.call(craftercms.utils.constants.components.get('@mui/icons-material/CachedOutlined'), 'default') ? craftercms.utils.constants.components.get('@mui/icons-material/CachedOutlined')['default'] : craftercms.utils.constants.components.get('@mui/icons-material/CachedOutlined');
const ListItemIcon = craftercms.libs.MaterialUI.ListItemIcon && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.ListItemIcon, 'default') ? craftercms.libs.MaterialUI.ListItemIcon['default'] : craftercms.libs.MaterialUI.ListItemIcon;
const MenuItem = craftercms.libs.MaterialUI.MenuItem && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.MenuItem, 'default') ? craftercms.libs.MaterialUI.MenuItem['default'] : craftercms.libs.MaterialUI.MenuItem;
const ListItemText = craftercms.libs.MaterialUI.ListItemText && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.ListItemText, 'default') ? craftercms.libs.MaterialUI.ListItemText['default'] : craftercms.libs.MaterialUI.ListItemText;
const Button = craftercms.libs.MaterialUI.Button && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI.Button, 'default') ? craftercms.libs.MaterialUI.Button['default'] : craftercms.libs.MaterialUI.Button;

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

function findApodInstance(dataSources) {
    var _a, _b;
    var instances = (_a = dataSources === null || dataSources === void 0 ? void 0 : dataSources.instances) !== null && _a !== void 0 ? _a : [];
    for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
        var resolved = instances_1[_i];
        var instance = resolved === null || resolved === void 0 ? void 0 : resolved.instance;
        if (!instance)
            continue;
        var interfaces = (_b = instance.interfaces) !== null && _b !== void 0 ? _b : [];
        if (interfaces.includes('apod-image')) {
            return instance;
        }
    }
    return null;
}
function retrieveFromInstance(instance, context) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (typeof instance.list === 'function') {
                return [2 /*return*/, instance.list(context)];
            }
            throw new Error('Bound data source does not expose list() method.');
        });
    });
}
/**
 * FE2 control: asks the bound apod-image DS for today's picture and displays it.
 * Field value is a JSON string of the APOD payload (empty when unset).
 */
function ApodControl(props) {
    var _this = this;
    var _a, _b, _c, _d, _e;
    var value = props.value, setValue = props.setValue, field = props.field, readonly = props.readonly, dataSources = props.dataSources;
    var id = "fe2-plugin-control-apod-".concat((_a = field === null || field === void 0 ? void 0 : field.id) !== null && _a !== void 0 ? _a : 'field');
    var _f = useState(value), preview = _f[0], setPreview = _f[1];
    var _g = useState(false), loading = _g[0], setLoading = _g[1];
    var _h = useState(null), error = _h[0], setError = _h[1];
    useEffect(function () {
        setPreview(value);
    }, [value]);
    var instance = useMemo(function () { return findApodInstance(dataSources); }, [dataSources]);
    var dsStatus = (_b = dataSources === null || dataSources === void 0 ? void 0 : dataSources.status) !== null && _b !== void 0 ? _b : 'idle';
    var dsReady = dsStatus === 'ready' || dsStatus === 'idle';
    var fetchApod = useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        var resource, apod, err_1;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!instance) {
                        setError('No apod-image data source is bound to this field. Update the content type definition to add options to this control.');
                        return [2 /*return*/];
                    }
                    setLoading(true);
                    setError(null);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, retrieveFromInstance(instance, (_a = dataSources === null || dataSources === void 0 ? void 0 : dataSources.context) !== null && _a !== void 0 ? _a : null)];
                case 2:
                    resource = _c.sent();
                    apod = (_b = resource === null || resource === void 0 ? void 0 : resource[0]) === null || _b === void 0 ? void 0 : _b.apod;
                    console.log('apod', apod);
                    setPreview(apod);
                    setValue(apod);
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _c.sent();
                    console.error('APOD fetch failed.', err_1);
                    setError(err_1 instanceof Error ? err_1.message : String(err_1));
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [instance, setValue, dataSources === null || dataSources === void 0 ? void 0 : dataSources.context]);
    var clearValue = useCallback(function () {
        setPreview(null);
        setValue(null);
        setError(null);
    }, [setValue]);
    var FormsEngineField = (_e = (_d = (_c = globalThis.craftercms) === null || _c === void 0 ? void 0 : _c.formsEngine) === null || _d === void 0 ? void 0 : _d.controls) === null || _e === void 0 ? void 0 : _e.FormsEngineField;
    if (!FormsEngineField) {
        return null;
    }
    var mediaUrl = (preview === null || preview === void 0 ? void 0 : preview.url) || (preview === null || preview === void 0 ? void 0 : preview.hdurl);
    return (jsx(FormsEngineField, { field: field, htmlFor: id, children: jsxs(Stack, { spacing: 1.5, id: id, children: [!instance && dsReady && (jsx(Alert, { severity: "warning", children: "Bind an Astronomy Picture of the Day data source (interface apod-image) on this field to fetch the picture of the day." })), error && (jsx(Alert, { severity: "error", onClose: function () { return setError(null); }, children: error })), !preview && (jsx(Box, { sx: {
                        p: 1,
                        gap: 1,
                        py: 0.5,
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        color: 'primary.main',
                        justifyContent: 'center'
                    }, children: jsxs(MenuItem, { component: Button, variant: "text", loading: loading, onClick: fetchApod, disabled: Boolean(readonly) || loading || !instance, sx: { flexDirection: 'column', justifyContent: 'center' }, children: [jsx(ListItemIcon, { sx: { mr: 0, color: 'inherit' }, children: jsx(CachedOutlinedIcon, {}) }), jsx(ListItemText, { children: jsx(Typography, { children: "Fetch Astronomy Picture of the Day" }) })] }) })), preview && (jsxs(Card, { sx: { display: 'flex' }, children: [mediaUrl && (jsx(CardMedia, { component: "img", sx: { width: '40%' }, image: mediaUrl, alt: preview.title || 'Astronomy Picture of the Day' })), jsx(Box, { sx: { display: 'flex', flexDirection: 'column' }, children: jsxs(CardContent, { sx: { flex: '1 0 auto' }, children: [jsx(Typography, { component: "div", variant: "body1", marginBottom: 1, children: preview.title || 'Astronomy Picture of the Day' }), preview.date && (jsxs(Typography, { variant: "caption", color: "text.secondary", display: "block", gutterBottom: true, children: [preview.date, preview.copyright ? " \u00B7 \u00A9 ".concat(preview.copyright) : ''] })), preview.explanation && (jsx(Typography, { variant: "body2", color: "text.secondary", children: preview.explanation })), jsxs(Box, { sx: { mt: 1 }, children: [preview && !readonly && (jsx(Tooltip, { title: "Refresh Astronomy Picture of the Day", children: jsx(IconButton, { size: "small", onClick: fetchApod, disabled: Boolean(readonly) || loading || !instance, children: jsx(CachedOutlinedIcon, {}) }) })), preview.hdurl && (jsx(Tooltip, { title: "HD image", children: jsx(IconButton, { size: "small", onClick: function () {
                                                        if (preview.hdurl) {
                                                            window.open(preview.hdurl, '_blank');
                                                        }
                                                    }, children: jsx(VisibilityOutlinedIcon, {}) }) })), preview && !readonly && (jsx(Tooltip, { title: "Clear", children: jsx(IconButton, { size: "small", onClick: clearValue, disabled: readonly, children: jsx(DeleteOutlineOutlinedIcon, {}) }) }))] })] }) })] }))] }) }));
}

/**
 * FE2 control plugin — NASA Astronomy Picture of the Day (APOD).
 *
 * Locator (form-definition): pluginId=org.craftercms.examples type=control name=apod filename=index.js
 * Asset path: /static-assets/plugins/org/craftercms/examples/control/apod/index.js
 */
var plugin = {
    /** Runtime registry identity — not the same as form-definition locator `pluginId`. */
    id: 'org.craftercms.examples.control',
    controls: {
        /** Key must equal field.type */
        apod: {
            Component: ApodControl,
            dataSourceBindings: [{ propertyName: 'datasource', interfaces: ['apod-image'], selection: 'single' }],
            valueRetriever: function (value) {
                if (value == null || value === '')
                    return null;
                if (typeof value === 'object')
                    return value;
                var text = String(value).trim();
                if (!text)
                    return null;
                try {
                    return JSON.parse(text);
                }
                catch (_a) {
                    // Legacy / plain URL storage
                    return { url: text, title: text, date: '', explanation: '' };
                }
            },
            valueSerializer: function (_field, value) {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                var apod = value;
                if (!apod || typeof apod !== 'object')
                    return '';
                return JSON.stringify({
                    date: (_a = apod.date) !== null && _a !== void 0 ? _a : '',
                    title: (_b = apod.title) !== null && _b !== void 0 ? _b : '',
                    explanation: (_c = apod.explanation) !== null && _c !== void 0 ? _c : '',
                    url: (_d = apod.url) !== null && _d !== void 0 ? _d : '',
                    hdurl: (_e = apod.hdurl) !== null && _e !== void 0 ? _e : '',
                    copyright: (_f = apod.copyright) !== null && _f !== void 0 ? _f : '',
                    thumbnail_url: (_g = apod.thumbnail_url) !== null && _g !== void 0 ? _g : '',
                    service_version: (_h = apod.service_version) !== null && _h !== void 0 ? _h : ''
                });
            }
        }
    }
};

export { plugin as default };
