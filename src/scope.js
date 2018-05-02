const scopes = [
  'now',
  'myApps',
  'myDevices',
  'inAppNotifications',
  'nest',
  'tracker',
  'connectedCar',
  'run',
]

const DENY = 'DENY'
const ALLOW = 'ALLOW'

export function isScopedReducer(key) {
  return scopes.includes(key)
}

export function scopeMatch(scope, key) {
  if (scope.rules) {
    const ruleMatch = scope.rules.find(rule => rule.value === key)
    if (ruleMatch) {
      return ruleMatch.type === ALLOW
    }
  }
  return scope.default === ALLOW
}
