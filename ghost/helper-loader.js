var Promise = require('bluebird'),
  helperPath = "../node_modules/ghost/core/server/helpers",
  errors = require(helperPath + '/../errors'),
  utils = require(helperPath + '/utils'),
  coreHelpers = {},
  myHelpers = {},
  registerHelpers;

// Pre-load settings data:
// - activeTheme
// - permalinks

// if (!utils.isProduction) {
//     hbs.handlebars.logger.level = 0;
// }

coreHelpers.asset = require(helperPath + '/asset');
coreHelpers.author = require(helperPath + '/author');
coreHelpers.body_class = require(helperPath + '/body_class');
coreHelpers.content = require(helperPath + '/content');
coreHelpers.date = require(helperPath + '/date');
coreHelpers.encode = require(helperPath + '/encode');
coreHelpers.excerpt = require(helperPath + '/excerpt');
coreHelpers.foreach = require(helperPath + '/foreach');
coreHelpers.ghost_foot = require(helperPath + '/ghost_foot');
coreHelpers.ghost_head = require(helperPath + '/ghost_head');
coreHelpers.is = require(helperPath + '/is');
coreHelpers.has = require(helperPath + '/has');
coreHelpers.meta_description = require(helperPath + '/meta_description');
coreHelpers.meta_title = require(helperPath + '/meta_title');
coreHelpers.navigation = require(helperPath + '/navigation');
coreHelpers.page_url = require(helperPath + '/page_url');
coreHelpers.pageUrl = require(helperPath + '/page_url').deprecated;
coreHelpers.pagination = require(helperPath + '/pagination');
coreHelpers.plural = require(helperPath + '/plural');
coreHelpers.post_class = require(helperPath + '/post_class');
coreHelpers.tags = require(helperPath + '/tags');
coreHelpers.title = require(helperPath + '/title');
coreHelpers.url = require(helperPath + '/url');
coreHelpers.image = require(helperPath + '/image');
myHelpers.isDraft = require('./helpers/isDraft');
myHelpers.t = require('./helpers/t');
myHelpers.mydate = require('./helpers/mydate');

//coreHelpers.ghost_script_tags = require(helperPath + '/ghost_script_tags');

coreHelpers.helperMissing = function(arg) {
  if (arguments.length === 2) {
    return undefined;
  }
  errors.logError('Missing helper: "' + arg + '"');
};

// Register an async handlebars helper for a given handlebars instance
function wrapWithResolve(fn) {
  return function(options, cb) {
    // Wrap the function passed in with a when.resolve so it can
    // return either a promise or a value
    Promise.resolve(fn.call(this, options)).then(function(result) {
      cb(result);
    }).catch(function(err) {
      errors.logAndThrowError(err, 'registerAsyncThemeHelper: ' + fn);
    });
  }
}

registerHelpers = function(hbs) {
  // Register theme helpers
  hbs.registerHelper('asset', coreHelpers.asset);
  hbs.registerHelper('author', coreHelpers.author);
  hbs.registerHelper('content', coreHelpers.content);
  hbs.registerHelper('title', coreHelpers.title);
  hbs.registerHelper('date', coreHelpers.date);
  hbs.registerHelper('encode', coreHelpers.encode);
  hbs.registerHelper('excerpt', coreHelpers.excerpt);
  hbs.registerHelper('foreach', coreHelpers.foreach);
  hbs.registerHelper('is', coreHelpers.is);
  hbs.registerHelper('has', coreHelpers.has);
  hbs.registerHelper('navigation', coreHelpers.navigation);
  hbs.registerHelper('page_url', coreHelpers.page_url);
  hbs.registerHelper('pageUrl', coreHelpers.pageUrl);
  hbs.registerHelper('pagination', coreHelpers.pagination);
  hbs.registerHelper('tags', coreHelpers.tags);
  hbs.registerHelper('plural', coreHelpers.plural);
  hbs.registerHelper('url', coreHelpers.url);
  hbs.registerHelper('image', coreHelpers.image);
  hbs.registerHelper('isdraft', myHelpers.isDraft);
  hbs.registerHelper('t', myHelpers.t);
  hbs.registerHelper('mydate', myHelpers.mydate);

  // Async theme helpers
  hbs.registerAsyncHelper('body_class', wrapWithResolve(coreHelpers.body_class));
  hbs.registerAsyncHelper('ghost_foot', wrapWithResolve(coreHelpers.ghost_foot));
  hbs.registerAsyncHelper('ghost_head', wrapWithResolve(coreHelpers.ghost_head));
  hbs.registerAsyncHelper('meta_description', wrapWithResolve(coreHelpers.meta_description));
  hbs.registerAsyncHelper('meta_title', wrapWithResolve(coreHelpers.meta_title));
  hbs.registerAsyncHelper('post_class', wrapWithResolve(coreHelpers.post_class));

};

module.exports = coreHelpers;
module.exports.loadCoreHelpers = registerHelpers;
