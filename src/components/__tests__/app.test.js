import App from "~pages/_app";
import Home from "~pages/index";
import toast from "~components/Toast";

jest.mock("~components/Toast", () => jest.fn());

const initProps = {
	Component: Home,
};

const ctx = {
	pathname: "/",
	query: {},
	asPath: "/",
	AppTree: () => {},
	store: {
		liftedStore: {
			dispatch: jest.fn(),
			subscribe: jest.fn(),
			getState: jest.fn(),
			replaceReducer: jest.fn(),
		},
		dispatch: jest.fn(),
		subscribe: jest.fn(),
		getState: jest.fn(),
		replaceReducer: jest.fn(),
	},
	isServer: false,
};

const getInitialProps = jest.fn();

describe("App", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<App {...initProps} />);
	});

	afterEach(() => {
		toast.mockClear();
		getInitialProps.mockClear();
	});

	it("renders without errors", () => {
		expect(wrapper.find("HomeContainer").exists()).toBeTruthy();
	});

	it("initially displays a toast message", () => {
		expect(toast).toHaveBeenCalledWith({
			type: "info",
			message: "Welcome to the NextJS SSR Kit!",
		});
	});

	it("handles Component's without 'getInitialProps'", async () => {
		await App.getInitialProps({
			Component: { getInitialProps: undefined },
			ctx,
		});
		wrapper.update();

		expect(wrapper.props("pageProps")).toEqual({
			Component: Home,
		});
	});

	it("handles Component's with 'getInitialProps'", async () => {
		await App.getInitialProps({
			Component: {
				getInitialProps,
			},
			ctx,
		});

		expect(getInitialProps).toHaveBeenCalledWith(ctx);
		expect(wrapper.props("pageProps")).toEqual({
			Component: Home,
		});
	});
});
