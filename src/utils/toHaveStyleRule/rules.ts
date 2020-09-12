const getModifiedClassName = (className, modifier = "") => {
  const classNameSelector = `.${className}`;
  let prefix = "";

  modifier = modifier.trim();
  if (modifier.includes("&")) {
    modifier = modifier
      // & combined with other selectors and not a precedence boost should be replaced with the static className, but the first instance should be the dynamic className
      .replace(/&/g, classNameSelector);
  } else {
    prefix += classNameSelector;
  }
  const first = modifier[0];
  if (first !== ":" && first !== "[") {
    prefix += " ";
  }

  return `${prefix}${modifier}`.trim();
};

const hasClassNames = (classNames, selectors, options) =>
  classNames.some(className =>
    selectors.includes(
      getModifiedClassName(className, options.modifier).replace(/['"]/g, '"')
    )
  );

const mediaRegex = /(\([a-z-]+:)\s?([a-z0-9.]+\))/g;
const getAtRules = (ast, options) =>
  Object.keys(options)
    .map(option =>
      ast.stylesheet.rules
        .filter(
          rule =>
            rule.type === option &&
            rule[option] === options[option].replace(mediaRegex, "$1$2")
        )
        .map(rule => rule.rules)
        .reduce((acc, rules) => acc.concat(rules), [])
    )
    .reduce((acc, rules) => acc.concat(rules), []);

const handleMissingRules = options => ({
  pass: false,
  message: () =>
    `No style rules found on passed Component${
      Object.keys(options).length
        ? ` using options:\n${JSON.stringify(options)}`
        : ""
    }`
});

const getRules = (ast, classNames, options) => {
  const rules = Object.keys(options).some(option =>
    ["media", "supports"].includes(option)
  )
    ? getAtRules(ast, options)
    : ast.stylesheet.rules;

  return rules.filter(
    rule =>
      rule.type === "rule" && hasClassNames(classNames, rule.selectors, options)
  );
};

export { handleMissingRules };
export default getRules;
