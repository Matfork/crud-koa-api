var Author = require('../models/').Author;
var Book = require('../models/').Book;

var bookController =  class {
  //Get a list of all book using model.findAll()
  // static index() {
  //   console.log('fuck!: ');
  //   console.log(Book);
  //   return Book.findAll()
  //     .then(function (books) {
  //       return {code: 200,data: books}
  //     })
  //     .catch(function (error) {
  //       return {code: 500,data: error}
  //     });
  // },

  //Get a list of all book using model.findAll()
   static async index(ctx, next) {

     try{
         let books = await
          Book.findAll({
             order: [['id', 'ASC']],
             include: Author
          });

         ctx.status = 200;
         ctx.body = {code: 200,data: books};
     }catch(error){
         ctx.status = 500;
         ctx.body = {code: 500,error: error};
     }
  }

  //Get an book by the unique ID using model.findById()
   static async show(ctx, next) {
     try{
         let book = await
           Book.findById(ctx.params.id, {
             include: Author
           });

         ctx.status = 200;
         ctx.body = {code: 200,data: book};
     }catch(error){
         ctx.status = 500;
         ctx.body = {code: 500,error: error};
     }
  }

  //Create a new book using model.create()
   static async create(ctx, next) {
     try{
         let newBook = await
           Book.create(ctx.request.body);

         ctx.status = 200;
         ctx.body = {code: 200,data: newBook};
     }catch(error){
         ctx.status = 500;
         ctx.body = {code: 500,error: error};
     }
  }

  //Edit an existing book details using model.update()
   static async update(ctx, next) {
     try{
         let updatedRecords = await
           Book.update(ctx.request.body, {
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

  //Delete an existing book by the unique ID using model.destroy()
   static async delete(ctx, next) {

    try{
        let deletedRecords = await
          Book.destroy({
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

module.exports = bookController;
