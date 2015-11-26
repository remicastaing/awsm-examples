/**
 * AWS Module: Action: Modularized Code
 */

// Export For Lambda Handler
module.exports.run = function(event, context, cb) {
  return cb(null, action(event, context));
};

// Your Code
var action = function(event, context) {
  return {'var1_and_var2' : event.var1 + ' ' + event.var2};
};
