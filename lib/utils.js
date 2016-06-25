'use strict';
const cleanCss = require('clean-css');
/**
 * Created by Adrian on 22-Jun-16.
 */
module.exports = function(thorin) {
  /*
   * Performs CSS cleaning and minifying.
   * Returns promise.
   * */
  thorin.util.minifyCss = function MinifyCSS(source) {
    return new Promise((resolve, reject) => {
      new cleanCss().minify(source, function(err, result) {
        if (typeof err === 'object' && err) {
          return reject(thorin.error('CSS.CLEAN', 'Could not clean css', 500, err));
        }
        if (typeof result !== 'object' || !result || typeof result.styles !== 'string') {
          return reject(thorin.error('CSS.MINIFY', 'Could not minify css', 500, err));
        }
        if (result.errors.length !== 0) {
          return reject(thorin.error(result.errors[0]));
        }
        resolve(result.styles);
      });
    });
  };
}