/* eslint-disable */
// @ts-nocheck
const matcherTest = (received, expected) => {
  try {
    const matcher =
      expected instanceof RegExp ? expect.stringMatching(expected) : expected;

    expect(received).toEqual(matcher);
    return true;
  } catch (error) {
    return false;
  }
};

export default matcherTest;
/* eslint-enable */
