const db = require("../models");
const User = db.user
const Comment = db.comments;

exports.createComment = (userId, comment) => {
    return Comment.create({
      name: comment.name,
      text: comment.text,
      userId: userId,
    })
      .then((comment) => {
        console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
        return comment;
      })
      .catch((err) => {
        console.log(">> Error while creating comment: ", err);
      });
  };

  exports.findUserById = (userId) => {
    return User.findByPk(userId, { include: ["comments"] })
      .then((user) => {
        return user;
      })
      .catch((err) => {
        console.log(">> Error while finding user: ", err);
      });
  };

  exports.findCommentById = (id) => {
    return Comment.findByPk(id, { include: ["user"] })
      .then((comment) => {
        return comment;
      })
      .catch((err) => {
        console.log(">> Error while finding comment: ", err);
      });
  };

  exports.findAll = () => {
    return User.findAll({
      include: ["comments"],
    }).then((user) => {
      return user;
    });
  };