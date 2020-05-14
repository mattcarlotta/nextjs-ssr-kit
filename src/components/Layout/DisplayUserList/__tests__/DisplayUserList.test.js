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
  updateUser,
};

const nextProps = {
  ...initialProps,
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
        zipCode: "1",
      },
      isEditingID: "",
      handleCloseModal,
      handleResetEditClick,
      resetMessage,
      updateUser,
    },
  ],
};

const nextNextProps = {
  ...nextProps,
  isEditingID: "1",
};

describe("DisplayUserList", () => {
  let wrapper;
  let cardNode;
  beforeEach(() => {
    wrapper = mount(<DisplayUserList {...initialProps} />);
    cardNode = () => wrapper.queryByTestId("card-container");
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
    const nodata = wrapper.queryByTestId("no-data");
    expect(nodata).toBeInTheDocument();
  });

  describe("when data is present", () => {
    beforeEach(() => {
      wrapper.setProps(nextProps);
    });
    it("renders the card when there is no editing ID", () => {
      expect(cardNode()).toBeInTheDocument();
    });

    it("calls deleteUser when the delete button is clicked", () => {
      const deleteButton = wrapper.queryByTestId("delete");
      fireEvent.click(deleteButton);
      expect(deleteUser).toHaveBeenCalledWith("1");
    });

    it("calls handleEditClick when the edit button is clicked", () => {
      const editButton = wrapper.queryByTestId("edit");
      fireEvent.click(editButton);
      expect(handleEditClick).toHaveBeenCalledWith("1");
    });

    it("renders the userForm when there is an editing ID", () => {
      wrapper.setProps(nextNextProps);
      const userForm = wrapper.queryByTestId("user-form");
      expect(userForm).toBeInTheDocument();
    });
  });
});
