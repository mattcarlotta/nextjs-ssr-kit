/* istanbul ignore file */
import { cloneElement } from "react";
import { render } from "@testing-library/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { Provider } from "react-redux";
import { store } from "~store";

//= =============================================================================//
// CUSTOM REACT TESTING FUNCTIONS                                                 /
//= =============================================================================//

/**
 * Factory function to initialize a rendered React component with Enzyme-like queries
 * @function mount
 * @param {node} Component - Component to be mounted
 * @function find - Queries the mounted container by a string
 * @function setProps - Rerenders the mounted Component with incoming props
 * @returns {object}
 */
export const mount = Component => {
  const wrapper = render(Component);

  const find = byString => wrapper.container.querySelector(byString);

  const setProps = props => wrapper.rerender(cloneElement(Component, props));

  return {
    find,
    setProps,
    ...wrapper,
  };
};

/**
 * Factory function to create a mounted RouterContext wrapper for a React component
 * @function withRouterContext
 * @param {node} Component - Component to be mounted
 * @param {object} initialProps - Component props specific to this setup.
 * @param {array} router - Initial route options for RouterContext.
 * @function render - Creates a wrapper around passed in component
 * @returns {MountedRouterWrapper}
 */
export const withRouterContext = (
  Component,
  initialProps = {},
  router = {
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
  },
) => {
  const wrapper = render(
    <Provider store={store}>
      <RouterContext.Provider value={router}>
        <Component {...initialProps} />
      </RouterContext.Provider>
    </Provider>,
  );
  return wrapper;
};
