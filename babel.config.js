const { readdirSync, statSync } = require("fs");
const { resolve } = require("path");

const ignoreFolders = /(\.next)|(\.git)|(node_modules)|(public)/;

const readDirectory = path =>
  readdirSync(path).reduce((acc, folder) => {
    const dirPath = `${path}${folder}`;
    if (
      !folder.match(ignoreFolders) &&
      statSync(resolve(dirPath)).isDirectory()
    ) {
      acc[`@${folder.replace(/[^\w\s]/gi, "")}`] = dirPath;
    }

    return acc;
  }, {});

module.exports = function(api) {
  api.cache(true);

  return {
    presets: ["next/babel"],
    plugins: [
      [
        "module-resolver",
        {
          alias: readDirectory("./")
        }
      ],
      [
        "styled-components",
        {
          ssr: true,
          displayName: true,
          preprocess: false
        }
      ],
      "lodash"
    ]
  };
};
