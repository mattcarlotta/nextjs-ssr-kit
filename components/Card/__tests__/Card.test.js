import Card from "../index";

const onDeleteClick = jest.fn();
const onEditClick = jest.fn();

const _id = "123456789";

const initProps = {
	_id,
	address: {
		street: "123 St.",
		state: "CA",
		suite: "1404",
		city: "SJ",
		zipCode: "55555",
	},
	backgroundInfo: "Hi.",
	email: "test@test.com",
	firstName: "Bob",
	onDeleteClick,
	onEditClick,
	lastName: "Dole",
	userName: "bobdole",
};

describe("Card", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Card {...initProps} />);
	});

	afterEach(() => {
		onDeleteClick.mockClear();
		onEditClick.mockClear();
	});

	it("renders without errors", () => {
		expect(wrapper.find("p.user").exists()).toBeTruthy();
	});

	it("clicking on the 'DeleteButton' calls 'onDeleteClick' with '_id'", () => {
		wrapper.find("DeleteButton").simulate("click");

		expect(onDeleteClick).toHaveBeenCalledWith(_id);
	});

	it("clicking on the 'EditButton' calls 'onEditClick' with '_id'", () => {
		wrapper.find("EditButton").simulate("click");

		expect(onEditClick).toHaveBeenCalledWith(_id);
	});
});
