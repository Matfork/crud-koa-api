var User = require('../models/').User;
var Group = require('../models/').Group;

var userController = class {
  //Get a list of all users using model.findAll()
   static async index(ctx, next) {
     try{
         let users = await
           User.findAll({
            order: [['id', 'ASC']],
            include: Group
          });

         ctx.status = 200;
         ctx.body = {code: 200,data: users};
     }catch(error){
         ctx.status = 500;
         ctx.body = {code: 500,error: error};
     }
  }

  //Get a client by the unique ID using model.findById()
   static async show(ctx, next) {
     try{
         let user = await
           User.findById(ctx.params.id, {
            include: Group
          });

         ctx.status = 200;
         ctx.body = {code: 200,data: user};
     }catch(error){
         ctx.status = 500;
         ctx.body = {code: 500,error: error};
     }
  }

  //Create a new user using model.create()
   static async create(ctx, next) {
     try{
         let newUser = await User.create(ctx.request.body);

         ctx.status = 200;
         ctx.body = {code: 200,data: user};
     }catch(error){
         ctx.status = 500;
         ctx.body = {code: 500,error: error};
     }
  }

  //Edit an existing user details using model.update()
   static async update(ctx, next) {
     try{
          let updatedRecords = await
          User.update(ctx.request.body, {
            where: {
              id: ctx.params.id
            }
          });

         ctx.status = 200;
         ctx.body = {code: 200,data: updatedRecords};
     }catch(error){
         ctx.status = 500;
         ctx.body = {code: 500,error: error};
     }
  }

  //Delete an existing user by the unique ID using model.destroy()
   static async delete(ctx, next) {
     try{
          let deletedRecords = await
          User.destroy({
             where: {
               id: ctx.params.id
             }
           });

         ctx.status = 200;
         ctx.body = {code: 200,data: deletedRecords};
     }catch(error){
         ctx.status = 500;
         ctx.body = {code: 500,error: error};
     }
  }
};

module.exports = userController;
