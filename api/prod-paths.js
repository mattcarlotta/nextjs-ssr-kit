const tsconfigpaths = require("tsconfig-paths");

tsconfigpaths.register({
  baseUrl: "./build",
  paths: {
    "~logger": ["logger/index"],
    "~controllers/*": ["api/controllers/*"],
    "~database/*": ["api/database/*"],
    "~database": ["api/database/index"],
    "~models": ["api/models/index"],
    "~middlewares": ["api/middlewares/index"],
    "~models/*": ["api/models/*"],
    "~routes/*": ["api/routes/*"],
    "~routes": ["api/routes/index"]
  }
});
