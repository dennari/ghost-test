// # Has Helper
// Usage: `{{#has tag="video, music"}}`, `{{#has author="sam, pat"}}`
//
// Checks if a post has a particular property

var _    = require('lodash');

function isdraft(options) {
    options = options || {};

    if (this.status && this.status === "draft" && options.fn) {
        return options.fn(this);
    }
    return options.inverse(this);
};

module.exports = isdraft;
