/* istanbul ignore file */
import isEmpty from "lodash.isempty";
import { cloneElement } from "react";
import { render, fireEvent } from "@testing-library/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { Provider } from "react-redux";
import { store } from "~store";
/**
 * A class that wraps RTL's render and supplies it with Enzyme-like methods
 * @class EnzymeWrapper
 * @param {node} Component - Component to be mounted
 * @method find - finds a node by string using querySelector
 * @method setProps - merges old props with new props and rerenders the Component
 * @method simulate - simulates a fireEvent by type with passed in options
 * @returns {object} - an Enzyme-like wrapper
 */ class EnzymeWrapper {
  constructor(Component) {
    this.Component = Component;
    this.props = Component.props;
    this.wrapper = render(Component);
    this.find = this.find.bind(this);
    this.setProps = this.setProps.bind(this);

    return {
      ...this.wrapper,
      find: this.find,
      setProps: this.setProps,
    };
  }

  find(byString) {
    const nodes = document.querySelectorAll(byString);
    const selection = this.wrapper.container.querySelector(byString);

    if (!isEmpty(selection)) {
      selection.simulate = (type, opts) => this.simulate(selection, type, opts);
      selection.length = nodes.length || 0;
      selection.exists = nodes.length >= 1;
    }

    return selection;
  }

  setProps(props) {
    this.props = { ...this.props, ...props };

    this.wrapper.rerender(cloneElement(this.Component, this.props));
  }

  simulate(node, type, opts) {
    if (isEmpty(node)) {
      throw Error(
        `wrapper::simulate(): unable to locate any nodes to simulate an event.`,
      );
    }

    switch (type) {
      case "click": {
        fireEvent.click(node);
        break;
      }
      case "change": {
        fireEvent.change(node, opts);
        break;
      }
      case "submit": {
        fireEvent.submit(node);
        break;
      }
      default:
        break;
    }

    return node;
  }
}

/**
 * Factory function to initialize a RTL rendered React component with an Enzyme-like class
 * @function mount
 * @param {node} Component - Component to be mounted
 * @returns {object} - an Enzyme-like wrapper
 */
export const mount = Component => new EnzymeWrapper(Component);

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
