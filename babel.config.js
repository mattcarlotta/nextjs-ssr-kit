const { inStaging } = process.env;
const inStage = inStaging === "true";

module.exports = api => {
  const inProd = api.env("production");
  api.cache(() => process.env.NODE_ENV);

  return {
    presets: ["next/babel"],
    plugins: [
      [
        "styled-components",
        {
          ssr: true,
          displayName: true,
          preprocess: false,
        },
      ],
      inProd &&
        !inStage && [
          "react-remove-properties",
          { properties: ["data-testid"] },
        ],
    ].filter(Boolean),
  };
};
