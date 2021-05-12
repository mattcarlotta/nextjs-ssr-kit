import ClickHandler from "./ClickHandler";
import DropdownContainer from "./DropdownContainer";
import DropdownMenu from "./DropdownMenu";
import SelectContainer from "./SelectContainer";
import { ReactNode, ReactElement } from "~types";

export type DropdownProps = {
  children: ReactNode;
  menu: ReactNode;
};

const Dropdown = ({ children, menu }: DropdownProps): ReactElement => (
  <ClickHandler>
    {({ isVisible, handleMenuClick }) => (
      <SelectContainer data-testid="select-container">
        <DropdownContainer
          data-testid="dropdown-container"
          onClick={handleMenuClick}
        >
          {children}
        </DropdownContainer>
        {isVisible && (
          <DropdownMenu data-testid="dropdown-menu">{menu}</DropdownMenu>
        )}
      </SelectContainer>
    )}
  </ClickHandler>
);

export default Dropdown;
