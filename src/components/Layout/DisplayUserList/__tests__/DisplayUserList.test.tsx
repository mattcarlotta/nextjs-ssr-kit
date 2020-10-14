import { mount, ReactWrapper } from "enzyme";
import DisplayUserList from "../index";

const deleteUser = jest.fn();
const handleEditClick = jest.fn();
const handleCloseModal = jest.fn();
const handleResetEditClick = jest.fn();
const resetMessage = jest.fn();
const updateUser = jest.fn();

const initialProps = {
  _id: "1",
  data: [],
  deleteUser,
  handleEditClick,
  handleCloseModal,
  handleResetEditClick,
  resetMessage,
  updateUser
};

describe("DisplayUserList", () => {
  let wrapper: ReactWrapper;
  let cardNode: () => ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<DisplayUserList {...initialProps} />);
    cardNode = () => wrapper.find("[data-testid='card-container']");
  });

  afterEach(() => {
    deleteUser.mockClear();
    handleEditClick.mockClear();
    handleCloseModal.mockClear();
    handleResetEditClick.mockClear();
    resetMessage.mockClear();
    updateUser.mockClear();
  });

  it("initially renders no data", () => {
    expect(wrapper.find("[data-testid='no-data']")).toExist();
  });

  describe("when data is present", () => {
    beforeEach(() => {
      wrapper.setProps({
        data: [
          {
            _id: "1",
            email: "123@gmail.com",
            backgroundInfo: "123",
            firstName: "123",
            lastName: "456",
            userName: "123",
            address: {
              street: "19 Mosspark",
              suite: "20",
              city: "Glasgow",
              state: "CA",
              zipCode: "1"
            },
            isEditingID: "",
            handleCloseModal,
            handleResetEditClick,
            resetMessage,
            updateUser
          }
        ]
      });
    });
    it("renders the card when there is no editing ID", () => {
      expect(cardNode()).toExist();
    });

    it("calls deleteUser when the delete button is clicked", () => {
      wrapper
        .find("[data-testid='dropdown-container']")
        .first()
        .simulate("click");

      wrapper.find("[data-testid='delete']").first().simulate("click");

      expect(deleteUser).toHaveBeenCalledWith("1");
    });

    it("calls handleEditClick when the edit button is clicked", () => {
      wrapper
        .find("[data-testid='dropdown-container']")
        .first()
        .simulate("click");

      wrapper.find("[data-testid='edit']").first().simulate("click");

      expect(handleEditClick).toHaveBeenCalledWith("1");
    });

    it("renders the userForm when there is an editing ID", () => {
      wrapper.setProps({ isEditingID: "1" });

      expect(wrapper.find("[data-testid='user-form']")).toExist();
    });
  });
});
