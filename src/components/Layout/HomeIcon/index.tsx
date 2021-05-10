import { BsFillHouseFill } from "react-icons/bs";
import { ReactElement } from "~types";

const HomeIcon = (): ReactElement => (
  <span
    data-testid="home-icon"
    style={{ marginRight: "4px", fontSize: "20px" }}
  >
    <BsFillHouseFill style={{ position: "relative", top: 3, marginRight: 4 }} />
  </span>
);

export default HomeIcon;
