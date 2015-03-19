// # Has Helper
// Usage: `{{#has tag="video, music"}}`, `{{#has author="sam, pat"}}`
//
// Checks if a post has a particular property

var _    = require('lodash');
var path = require('path');
var Handlebars = require('handlebars');
var I18n = require('node-polyglot')
var _ = require('lodash')
var fs = require('fs')
var yaml = require('js-yaml')


var locales = {};
var i18ns = {};

function loadLocale(locale) {
  if (!locales[locale]) {
    var localeParts = locale.split("_");
    var location = localeParts[0].toLowerCase();
    localePath = path.join(__dirname, "..", "..","app",'locales', location + '.yml');
    locales[locale] = yaml.load(fs.readFileSync(localePath))
    console.log(locale, location)
  }
  return locales[locale];
}

function loadi18n(locale) {
  if (!i18ns[locale]) {
    i18ns[locale] = new I18n({
      phrases: loadLocale(locale)
    })
  }
  return i18ns[locale];
}

function t() {

  var args = [].slice.call(arguments).filter(function(el) {
    return typeof(el) === "string"
  })
  var key = args.join('.');

  var locale = this.locale || this.language;
  //console.log(this)
  if(!locale) {
  	return new Handlebars.SafeString(key);
  }
  if(_.isObject(locale) && locale.id) {
  	locale = locale.id
  }
  return new Handlebars.SafeString(loadi18n(locale).t(key));
}


module.exports = t
