/**
 * CasatwoController
 *
 * @description :: Server-side logic for managing casatwoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `CasatwoController.index()`
   */
  // index: function (req, res) {
  //   return res.json({
  //     todo: 'index() is not implemented yet!'
  //   });
  // },


  /**
   * `CasatwoController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `CasatwoController.show()`
   */
  show: function (req, res) {
    var id =req.param('id');
    Casatwo.findOne(id,function(err,show){
      if(err) return res.send(err,500);
      res.json({casashow:show});
    });
  },


  /**
   * `CasatwoController.create()`
   */
  create: function (req, res) {
    var params = req.params.all();
     //var children = [];
     // console.log(params);
    Casatwo.create(params,function(err,create){
      console.log('hi');
      if(err) return res.send(err,500);
      console.log(create)
      res.json(create);
    });
  },


  /**
   * `CasatwoController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
    // var params = req.params.all();
    // var id = req.param('id');
    // Casatwo.findOne(id,params,function(err,edit){
    //   if(err) return res.send(err,500);
    //   res.json(edit);
    // })
  },


  /**
   * `CasatwoController.update()`
   */
  update: function (req, res) {
    var params =req.params.all();
    var id =req.param('id');
    console.log(id);
    Casatwo.update(id,params,function(err,update){
      if(err) return res.send(err,500);
      console.log(update);
      res.json({casaupdate:update});
    });
    
  },


  /**
   * `CasatwoController.destroy()`
   */
  destroy: function (req, res) {
    var id = req.param('id');
    
     Casatwo.findOne(id,function(err,children){
      if(err) return res.send(err,500);
          
       Casatwo.destroy(id,function(err,destroy){
          if(err) return res.send(err,500);
          res.json({casadestroy:"delete"});
        });

     });

  }
};

