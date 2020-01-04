/* istanbul ignore file */
import { createElement } from "react";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";
import { store } from "~store";

//= =============================================================================//
// CUSTOM REACT TESTING FUNCTIONS                                                 /
//= =============================================================================//

/**
 * Factory function to create a ShallowWrapper for a component
 * @function shallowWrap
 * @param {node} Component - Component to be shallowed
 * @param {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */
export const shallowWrap = (Component, state = null) => {
	const wrapper = shallow(Component);
	if (state) wrapper.setState(state);
	return wrapper;
};

/**
 * Factory function to create a Mounted MemoryRouter Wrapper for a component
 * @function HOCWrap
 * @param {node} Component - Component to be mounted
 * @param {object} initialProps - Component props specific to this setup.
 * @param {object} state - Component initial state for setup.
 * @param {object} options - Options for mount
 * @function createElement - Creates a wrapper around passed in component (now we can use wrapper.setProps on root)
 * @returns {MountedRouterWrapper}
 */
export const HOCWrap = (
	Component,
	initialProps = {},
	state = null,
	options = {},
) => {
	const wrapper = mount(
		createElement(
			props => (
				<Provider store={store}>
					<Component {...props} />
				</Provider>
			),
			initialProps,
		),
		options,
	);
	if (state) wrapper.find(Component).setState(state);
	return wrapper;
};
