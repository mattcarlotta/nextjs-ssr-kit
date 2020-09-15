/* eslint-disable */
// @ts-nocheck
import getCSS from "./css";
import getClassNames from "./classnames";
import getDeclarations from "./declarations";
import normalizeOptions from "./options";
import matcherTest from "./matcher";
import buildReturnMessage from "./message";
import getRules, { handleMissingRules } from "./rules";
import { resetStyleSheet } from "./stylesheet";

function toHaveStyleRule(component, property, expected, options = {}) {
  const classNames = getClassNames(component);
  const ast = getCSS();
  const normalizedOptions = normalizeOptions(options);
  const rules = getRules(ast, classNames, normalizedOptions);

  if (!rules.length) return handleMissingRules(normalizedOptions);

  const declarations = getDeclarations(rules, property);
  const declaration = declarations.pop() || {};
  const received = declaration.value;
  const pass =
    !received && !expected && this.isNot
      ? false
      : matcherTest(received, expected);

  return {
    pass,
    message: buildReturnMessage(this.utils, pass, property, received, expected),
  };
}

global.beforeEach(resetStyleSheet);

expect.extend({ toHaveStyleRule });
/* eslint-enable */
