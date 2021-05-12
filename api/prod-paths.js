const tsconfigpaths = require("tsconfig-paths");
const tsConfig = require("./tsconfig.json");

tsconfigpaths.register({
  baseUrl: "./build",
  paths: tsConfig.compilerOptions.paths
});
