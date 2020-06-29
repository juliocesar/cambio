// Transform for assets and things that aren't needed in test
// ==========================================================

module.exports = {
  process() {
    return 'module.exports = {};'
  },
  getCacheKey() {
    return 'emptyTransform'
  },
}
