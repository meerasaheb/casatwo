/**
 * Casatwo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
// jQuery("#transport-form").validate({
//         rules: {
//             'qty[]': {
//                 required: true
//             }
//         },
//     });
module.exports = {
     // unique:'true',
  attributes: {
    
    name: { type: 'string', unique : 'true'},
    children:{ type: 'array', unique : 'true'}
}
  
};

