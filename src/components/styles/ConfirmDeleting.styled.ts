import styled from "styled-components";

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  //align-items: center;
`;
const TranparentBackground = styled.div`
  position: fixed;
  z-index: 1;
  background-color: white;
  opacity: 90%;
  top: 0px;
  width: 100%;
  height: 100%;
`;
const StyledContextualMenuContainer = styled.div`
  position: fixed;
  z-index: 2;
  opacity: 100%;
  top: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 0px #a7a7a740;
  width: 232px;
  height: 100px;
  background-color: #f5f5f5;
`;
const ConfirmationNote = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  border-bottom: solid #eeeeee 1px;
  font-weight: 400;
  font-size: 16px;
  color: #8f9db6;
  height: 50%;
  width: 100%;
`;

const StyledDeleteButton = styled.button`
  z-index: 3;
  background-color: transparent;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #d86464;
  height: 50%;
  width: 100%;
  border-radius: 10px;
  border: none;
  bottom: 0px;
  &:hover {
    background-color: #f0f0f0;
  }
`;
const StyledCancelButton = styled.button`
  position: fixed;
  z-index: 3;
  bottom: 0px;
  background-color: #a3b1cb;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: white;
  height: 70px;
  width: 232px;
  width: 100%;
  //border-radius: 10px;
  border: none;
  bottom: 0px;
  /* &:hover {
    background-color: #f0f0f0;
  } */
`;
export {
  Root,
  TranparentBackground,
  StyledContextualMenuContainer,
  StyledDeleteButton,
  ConfirmationNote,
  StyledCancelButton,
};
