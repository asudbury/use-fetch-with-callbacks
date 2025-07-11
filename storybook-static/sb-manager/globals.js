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
    react: '__REACT__',
    'react-dom': '__REACT_DOM__',
    '@storybook/components': '__STORYBOOK_COMPONENTS__',
    '@storybook/channels': '__STORYBOOK_CHANNELS__',
    '@storybook/core-events': '__STORYBOOK_CORE_EVENTS__',
    '@storybook/router': '__STORYBOOK_ROUTER__',
    '@storybook/theming': '__STORYBOOK_THEMING__',
    '@storybook/api': '__STORYBOOK_API__',
    '@storybook/manager-api': '__STORYBOOK_API__',
    '@storybook/addons': '__STORYBOOK_ADDONS__',
    '@storybook/client-logger': '__STORYBOOK_CLIENT_LOGGER__',
    '@storybook/types': '__STORYBOOK_TYPES__',
  },
  globalPackages = Object.keys(globalsNameReferenceMap);
0 && (module.exports = { globalPackages, globalsNameReferenceMap });
