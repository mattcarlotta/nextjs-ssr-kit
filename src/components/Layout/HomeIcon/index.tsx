import { BsFillHouseFill } from "react-icons/bs";
import { FC } from "~types";

const HomeIcon: FC = () => (
  <span
    data-testid="home-icon"
    style={{ marginRight: "4px", fontSize: "20px" }}
  >
    <BsFillHouseFill style={{ position: "relative", top: 3, marginRight: 4 }} />
  </span>
);

export default HomeIcon;
