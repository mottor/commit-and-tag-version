module.exports = function (rawMsg, newVersion) {
  const message = String(rawMsg);
  return message
    .replace(/{{currentTag}}/g, newVersion)
    .replace(/{{changelogContent}}/g, global.changelogContent);
};
