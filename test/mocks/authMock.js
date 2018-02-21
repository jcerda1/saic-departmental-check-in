module.exports = (req, res, next, spy) => {
  spy(req, res);
  next(req, res);
};