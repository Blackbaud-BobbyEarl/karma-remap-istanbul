module.exports = function(source, map) {
  if (map) {
    source += [
      "\r\n",
      "//# sourceMappingURL=data:application/json;base64,",
      new Buffer(JSON.stringify(map)).toString('base64')
    ].join('');
  }

  return source;
}
