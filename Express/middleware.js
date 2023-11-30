const local = (req, res, next) => {
  console.log(req.method);
  console.log(__filename);
  next();
};
module.exports = local;
