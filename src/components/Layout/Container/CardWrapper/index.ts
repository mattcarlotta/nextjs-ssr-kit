import styled from "@emotion/styled";

const CardWrapper = styled.div`
  background-color: #fff;
  min-height: 400px;
  padding: 10px 15px;
  margin-bottom: 0;
  position: relative;
  min-width: 1px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);

  :hover {
    box-shadow: 0 10px 20px 0 rgba(130, 130, 130, 0.39);
  }
`;

export default CardWrapper;
