import User from "../model/User.js";

const index = (req, res) => {
  res.render("join");
};

const post_user = (req, res) => {
  User.insert(req.body, function (result) {
    res.send({ id: result });
  });
};

const login = (req, res) => {
  res.render("login");
};

const post_login = (req, res) => {
  User.select(req.body.id, req.body.password, function (result) {
    if (result == null) {
      return res.send({ result: result, flag: false });
    } else {
      if (req.body.password != result.password) {
        return res.send({ result: result, flag: false });
      } else {
        return res.send({ resutl: result, flag: true });
      }
    }
  });
};

const edit = (req, res) => {
  User.get_user(req.body.id, function (result) {
    res.render("edit", { data: result[0] });
  });
};

const patch_user = (req, res) => {
  User.update(req.body, function (result) {
    console.log("update result: ", result);
    res.send("수정완료");
  });
};

const delete_user = (req, res) => {
  User.delect(req.body.id, function (result) {
    console.log("delete result: ", result);
    res.send("success Delete");
  });
};

export default {
  index,
  post_user,
  login,
  post_login,
  edit,
  patch_user,
  delete_user,
};
