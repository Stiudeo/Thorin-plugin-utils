'use strict';
/**
 * Created by Adrian on 19-Mar-16.
 */
module.exports = function init(thorin) {
  const utils = thorin.util.readDirectory(__dirname + '/lib', {
    ext: '.js'
  });
  utils.forEach((item) => {
    require(item)(thorin);
  });
};