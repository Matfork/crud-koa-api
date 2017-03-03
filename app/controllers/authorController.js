var Author = require('../models/').Author;
var Book = require('../models/').Book;
var sq = require('sequelize');

var authorController = class {
  //Get a list of all authors using model.findAll()
  static async index( ctx, next) {
    try{
        let authors = await
          Author.findAll({
            order: [['id', 'ASC']],
            include: Book
          });

        ctx.status = 200;
        ctx.body = {code: 200,data: authors};
    }catch(error){
        ctx.status = 500;
        ctx.body = {code: 500,error: error};
    }
  }

  //Get an author by the unique ID using model.findById()
  static async show(ctx, next) {

    try{
        let author = await
          Author.findById(ctx.params.id,
          {
            include: Book
          });

        ctx.status = 200;
        ctx.body = {code: 200, data: author};
    }catch(error){
        ctx.status = 500;
        ctx.body = {code: 500, error: error};
    }
  }

  //Create a new author using model.create()
  static async create(ctx, next) {
    try{
        let newAuthor = await
          Author.create(ctx.request.body);

        ctx.status = 200;
        ctx.body = {code: 200, data: newAuthor};
    }catch(error){
        ctx.status = 500;
        ctx.body = {code: 500, error: error};
    }
  }

  //Edit an existing author details using model.update()
  static async update(ctx, next) {
    try{
        let updatedRecords = await
          Author.update(ctx.request.body, {
            where: {
              id: ctx.params.id
            }
          });

        ctx.status = 200;
        ctx.body = {code: 200, data: updatedRecords};
    }catch(error){
        ctx.status = 500;
        ctx.body = {code: 500, error: error};
    }
  }

  //Delete an existing author by the unique ID using model.destroy()
  static async delete(ctx, next) {
    try{
        let deletedRecords = await
          Author.destroy({
            where: {
              id: ctx.params.id
            }
          });

        ctx.status = 200;
        ctx.body = {code: 200, data: deletedRecords};
    }catch(error){
        ctx.status = 500;
        ctx.body = {code: 500, error: error};
    }
  }

  //Get all authors for select drop down
  static async getAllMap(ctx, next) {
    try{
        var author = await
          Author.findAll({
            attributes: ['id', [sq.fn('concat', sq.col('first_name'),' ',sq.col('last_name')), 'full_name']],
            order: [['id', 'ASC']]
          });

        ctx.status = 200;
        ctx.body = {code: 200, data: author};
    }catch(error){
        ctx.status = 500;
        ctx.body = {code: 500, error: error};
    }
  }
};

module.exports = authorController;
