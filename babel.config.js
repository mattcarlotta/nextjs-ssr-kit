const { inStaging } = process.env;
const inStage = inStaging === "true";

module.exports = api => {
  const inProd = api.env("production");
  api.cache(() => process.env.NODE_ENV);

  return {
    presets: [
      "next/babel",
      [
        "@emotion/babel-preset-css-prop",
        {
          labelFormat: "[filename]",
        },
      ],
    ],
    plugins: [
      inProd &&
        !inStage && [
          "react-remove-properties",
          { properties: ["data-testid"] },
        ],
    ].filter(Boolean),
  };
};
