const validateResource = (resourceSchema) => async (req, res, next) => {
    const resource = req.body;
    try {
      // throws an error if not valid
      await resourceSchema.validate(resource);
      next();
    } catch (error) {
      res.status(400),
      next(error)
    }
  };
  
  module.exports = { validateResource} ;