'use strict';
const parseDomain = require('parse-domain');

module.exports = function(thorin) {
  /*
  * Returns the root domain of the given domain, or null if it is invalid.
  * Example:
  *     - some.example.com -> example.com
  *     - google.com -> google.com
  *     - some.other.misc.domain.co.uk -> domain.co.uk
  * */
  thorin.util.getDomainRoot = function(fullDomain) {
    let parsed = parseDomain(fullDomain);
    if(!parsed) return null;
    let rootDomain = parsed.domain + '.' + parsed.tld;
    return rootDomain;
  };

  /*
  * Returns the Top-Level-Domain (com, com.uk, etc) of the given full domain.
  * */
  thorin.util.getDomainTld = function(fullDomain) {
    let parsed = parseDomain(fullDomain);
    if(!parsed) return null;
    if(!parsed.tld) return null;
    return parsed.tld;
  };

  /*
  * Returns the subdomain of the given domain.
  * */
  thorin.util.getSubdomain = function(fullDomain) {
    let parsed = parseDomain(fullDomain);
    if(!parsed) return null;
    if(!parsed.subdomain) return null;
    return parsed.subdomain;
  };
};