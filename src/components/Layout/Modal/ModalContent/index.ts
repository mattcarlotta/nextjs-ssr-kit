/* istanbul ignore file */
import styled from "@emotion/styled";

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow-y: auto;
  flex-direction: column;
  box-shadow: 0px 0px 60px 20px rgba(0, 0, 0, 0.65);
  border-radius: 4px;
  background-color: #fff;
  text-align: left;
  z-index: 200;
`;

export default ModalContent;
