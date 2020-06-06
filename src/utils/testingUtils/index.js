/* istanbul ignore file */
import { createElement, cloneElement } from "react";
import { mount } from "enzyme";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { Provider } from "react-redux";
import { store } from "~store";

/**
 * Factory function to create a mounted RouterContext wrapper for a React component
 * @function withRouterContext
 * @param {node} Component - Component to be mounted
 * @param {object} router - Initial route options for RouterContext.
 * @param {object} options - Optional options for enzyme's "mount"
 * @function createElement - Creates a wrapper around passed in component
 * @returns {MountedRouterWrapper}
 */
export const withRouterContext = (
  Component,
  router = {
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
  },
  options = {},
) => {
  const wrapper = mount(
    createElement(props => (
      <Provider store={store}>
        <RouterContext.Provider value={router}>
          {cloneElement(Component, props)}
        </RouterContext.Provider>
      </Provider>
    )),
    options,
  );
  return wrapper;
};

export default withRouterContext;
