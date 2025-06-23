import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: white;
  color: black;
  padding: 20px;
  width: 100%;
  text-align: center;
  display: flex;
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:first-child {
      align-items: flex-start;
    }
    &:last-child {
      align-items: flex-end;
    }
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: center;
    > div {
      align-items: center !important;
    }
  }
`;
