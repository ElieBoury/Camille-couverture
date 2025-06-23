import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  width: 100vw;
  background-color: white;
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 16px;
  z-index: 1000;

  a {
    color: black;
  }

  .name {
    position: absolute;
    left: 50px;
    font-size: 1.5rem;
  }

  > div {
    width: 100%;
    .ant-anchor-wrapper-horizontal::before {
      display: none;
    }
    .ant-anchor-link {
      font-size: 1.1rem;
      padding: 10px !important;
      width: 160px;
      text-align: center;
      border: none !important;
      &:not(:last-child) {
        border-right: 1px solid gainsboro !important;
      }
      &:not(:first-child) {
        border-left: 1px solid gainsboro;
      }
    }
  }

  @media (max-width: 1300px) {
    .name {
      left: 10px;
      font-size: 1.5rem;
    }
    > div {
      justify-content: flex-end;
    }
  }
`;

export const DrawerWrapper = styled.div`
  .ant-anchor-link {
    font-size: 1.2rem;
    padding: 20px;
    height: 60px;
  }
`;
