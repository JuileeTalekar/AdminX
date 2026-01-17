const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next(); // go to controller
  } catch (err) {
    let extraDetails = "Invalid input";

    if (err.errors && err.errors.length > 0) {
      extraDetails = err.errors[0].message;
    } else if (err.issues && err.issues.length > 0) {
      extraDetails = err.issues[0].message;
    }

    // 👉 Forward error to error middleware
    next({
      status: 422,
      message: "Fill the input properly",
      extraDetails,
    });
  }
};

module.exports = validate;
