//@ts-nocheck
const getDeclaration = (rule, property) =>
  rule.declarations
    .filter(
      declaration =>
        declaration.type === "declaration" && declaration.property === property,
    )
    .pop();

const getDeclarations = (rules, property) =>
  rules.map(rule => getDeclaration(rule, property)).filter(Boolean);

export default getDeclarations;
