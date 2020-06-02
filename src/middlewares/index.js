/* eslint disable */
import bodyParser from "body-parser";
import morgan from "morgan";

const { NODE_ENV } = process.env;
const inProduction = NODE_ENV === "production";

export default next => async (req, res) => {
  try {
    const middlewares = [
      !inProduction && morgan("tiny"),
      bodyParser.urlencoded({ extended: true }),
    ].filter(Boolean);

    const promises = middlewares.reduce((acc, middleware) => {
      const promise = new Promise((resolve, reject) => {
        middleware(req, res, result =>
          result instanceof Error ? reject(result) : resolve(result),
        );
      });
      return [...acc, promise];
    }, []);

    await Promise.all(promises);

    return next(req, res);
  } catch (error) {
    return res.status(404).json({ err: err.toString() });
  }
};
/* eslint enable */
