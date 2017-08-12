'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _blogPost = require('./../models/blogPost');

var _blogPost2 = _interopRequireDefault(_blogPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO: Falta añadir el modelo de Blog Post
/*
  Crear un route para blog posts,
  añadir un post method para mandar al server mis weas
  añadir una view para extra posts
*/
var blog = {};

blog.get = function (req, res) {
  _blogPost2.default.find({}, function (err, blogs) {
    if (err) {
      throw err;
    } else {
      res.render('blog', {
        blogs: blogs
      });
    }
  });
};

exports.default = blog;
//# sourceMappingURL=blog.js.map