'use strict';

exports.__esModule = true;
exports.isScopedReducer = isScopedReducer;
exports.scopeMatch = scopeMatch;
var scopes = ['now', 'myApps', 'myDevices', 'inAppNotifications', 'nest', 'tracker', 'connectedCar', 'run'];

var DENY = 'DENY';
var ALLOW = 'ALLOW';

function isScopedReducer(key) {
  return scopes.includes(key);
}

function scopeMatch(scope, key) {
  if (scope.rules) {
    var ruleMatch = scope.rules.find(function (rule) {
      return rule.value === key;
    });
    if (ruleMatch) {
      return ruleMatch.type === ALLOW;
    }
  }
  return scope.default === ALLOW;
}