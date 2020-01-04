import ClickHandler from "../index";

const closeModal = jest.fn();

const eventListener = {};
document.addEventListener = (evt, cb) => (eventListener[evt] = cb);
document.removeEventListener = jest.fn();

describe("Modal Click Handler", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(
			<div>
				<ClickHandler closeModal={closeModal}>
					<div className="modal-content">
						<h1>Modal Content</h1>
					</div>
				</ClickHandler>
				<div className="outside-content" />
			</div>,
		);
	});

	afterEach(() => {
		closeModal.mockClear();
	});

	it("renders without errors", () => {
		expect(wrapper.find("div.modal-content").exists()).toBeTruthy();
	});

	it("doesn't close the modal if the modal content was clicked", () => {
		wrapper
			.find("ClickHandler")
			.instance()
			.handleClickOutside({
				target: wrapper.find("div.modal-content").getDOMNode(),
			});

		expect(closeModal).toHaveBeenCalledTimes(0);
	});

	it("closes the modal if a click is outside of the modal", () => {
		wrapper
			.find("ClickHandler")
			.instance()
			.handleClickOutside({
				target: wrapper.find("div.outside-content").getDOMNode(),
			});

		expect(closeModal).toHaveBeenCalledTimes(1);
	});

	it("removes the event listeners on unmount", () => {
		wrapper.unmount();
		expect(document.removeEventListener).toHaveBeenCalledTimes(1);
	});
});
