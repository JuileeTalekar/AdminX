
// schema is signupschema 
const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    return next();
  } catch (err) {

    // const message = err.errors[0].message;
    // console.log(message);
    // res.status(422).json({ message });
    //next(message);
    // console.log(err);
    const status = 422;
    const message = "Fill the input properly";
    const extraDetails = err.issues.map((curElem) => curElem.message);

    const error = {
      status,
      message,
      extraDetails,
    };

    next(extraDetails);
  }
};

module.exports = validate;