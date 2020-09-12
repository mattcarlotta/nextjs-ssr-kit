const buildReturnMessage = (utils, pass, property, received, expected) => () =>
  `${utils.printReceived(
    !received && !pass
      ? `Property '${property}' not found in style rules`
      : `Value mismatch for property '${property}'`
  )}\n\n` +
  "Expected\n" +
  `  ${utils.printExpected(`${property}: ${expected}`)}\n` +
  "Received:\n" +
  `  ${utils.printReceived(`${property}: ${received}`)}`;

export default buildReturnMessage;
