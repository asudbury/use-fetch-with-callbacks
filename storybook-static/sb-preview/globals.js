'use strict';
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: !0 });
  },
  __copyProps = (to, from, except, desc) => {
    if ((from && typeof from == 'object') || typeof from == 'function')
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) &&
          key !== except &&
          __defProp(to, key, {
            get: () => from[key],
            enumerable:
              !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          });
    return to;
  };
var __toCommonJS = mod =>
  __copyProps(__defProp({}, '__esModule', { value: !0 }), mod);
var globals_exports = {};
__export(globals_exports, {
  globalPackages: () => globalPackages,
  globalsNameReferenceMap: () => globalsNameReferenceMap,
});
module.exports = __toCommonJS(globals_exports);
var globalsNameReferenceMap = {
    '@storybook/addons': '__STORYBOOK_MODULE_ADDONS__',
    '@storybook/global': '__STORYBOOK_MODULE_GLOBAL__',
    '@storybook/channel-postmessage':
      '__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__',
    '@storybook/channel-websocket': '__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__',
    '@storybook/channels': '__STORYBOOK_MODULE_CHANNELS__',
    '@storybook/client-api': '__STORYBOOK_MODULE_CLIENT_API__',
    '@storybook/client-logger': '__STORYBOOK_MODULE_CLIENT_LOGGER__',
    '@storybook/core-client': '__STORYBOOK_MODULE_CORE_CLIENT__',
    '@storybook/core-events': '__STORYBOOK_MODULE_CORE_EVENTS__',
    '@storybook/preview-web': '__STORYBOOK_MODULE_PREVIEW_WEB__',
    '@storybook/preview-api': '__STORYBOOK_MODULE_PREVIEW_API__',
    '@storybook/store': '__STORYBOOK_MODULE_STORE__',
    '@storybook/types': '__STORYBOOK_MODULE_TYPES__',
  },
  globalPackages = Object.keys(globalsNameReferenceMap);
0 && (module.exports = { globalPackages, globalsNameReferenceMap });
