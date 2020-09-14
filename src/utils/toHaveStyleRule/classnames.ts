//@ts-nocheck
const shouldDive = node =>
  typeof node.dive === "function" && typeof node.type() !== "string";

const isTagWithClassName = node =>
  node.exists() && node.prop("className") && typeof node.type() === "string";

const isStyledClass = className => /^(\w+(-|_))?sc-/.test(className);

const hasClassName = node =>
  node.length > 0 &&
  typeof node.props === "function" &&
  node.prop("className") &&
  isStyledClass(node.prop("className"));

const getClassNames = received => {
  let className;

  if (received) {
    if (received.$$typeof === Symbol.for("react.test.json")) {
      className = received.props.className || received.props.class;
    } else if (hasClassName(received)) {
      className = received.prop("className");
    } else if (typeof received.exists === "function" && received.exists()) {
      const tree = shouldDive(received) ? received.dive() : received;
      const components = tree.findWhere(isTagWithClassName);
      if (components.length) {
        className = components.first().prop("className");
      }
    } else if (global.Element && received instanceof global.Element) {
      className = Array.from(received.classList).join(" ");
    }
  }

  return className ? className.split(/\s/) : [];
};

export default getClassNames;
