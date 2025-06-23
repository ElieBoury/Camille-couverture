import styled from "styled-components";

export const HomeWrapper = styled.div`
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
    margin-top: 50px;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0px;
  }

  p,
  li {
    font-size: 1.2rem;
    margin-top: 6px;
  }

  img {
    filter: brightness(0.4);
    object-fit: cover;
  }

  > div {
    margin: 100px auto;
  }

  > .banner {
    position: relative;
    width: 100vw;
    height: 500px;
    margin: 0;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("banner.jpg");
    filter: brightness(0.4);
  }
  > .banner-inner {
    position: absolute;
    margin: 0px;
    top: 0;
    color: white;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 2rem;
    }
    .ant-btn {
      display: flex;
      flex-direction: column;
      height: 70px;
      width: 300px;
      border-radius: 0;
      border: none;
      font-size: 1.3rem;
      text-transform: uppercase;
      &:hover {
        scale: 1.1;
      }
    }
  }

  > .services {
    max-width: 1200px;
    > div {
      width: 100%;
      > div {
        position: relative;
        flex: 0 0 31%;
        margin: 5px;
        @media (max-width: 1300px) {
          flex: 0 0 49%;
        }
        @media (max-width: 1000px) {
          flex: 0 0 98%;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 40px;
        height: 400px;
        img {
          border-radius: 10px;
          top: 0px;
          position: absolute;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        h3,
        p {
          z-index: 2;
          color: white;
        }
        h3 {
          position: absolute;
          top: 30px;
        }
        li {
          max-width: 300px;
        }
      }
    }
  }

  > .a-propos {
    text-align: center;
    background-color: white;
    padding: 50px 10px;
    img {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      object-fit: cover;
      background-color: black;
    }
    h2 {
      margin-top: 0px;
    }
    p {
      max-width: 1000px;
      margin: 0 auto;
      margin-bottom: 10px;
    }
  }

  > .realisations {
    max-width: 1200px;
    margin: 50px auto;
    margin-bottom: 100px;
    .slick-slider {
      .slick-slide {
        .ant-image {
          width: 100%;
        }
        img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          filter: brightness(1);
        }
      }
    }
  }

  > .reviews {
    max-width: 1400px;
    .globals {
      max-width: 1200px;
      margin: 0 auto;
      margin-bottom: 50px;
      .rating {
        p {
          margin: 0;
          margin-left: 10px;
        }
      }
    }
    .reviews {
      > div {
        background-color: white;
        margin: 5px;
        width: 19%;
        padding: 20px;
        p {
          overflow: auto;
          max-height: 400px;
          font-size: 1rem;
        }
      }
    }
  }

  .contact {
    max-width: 1200px;
    height: 560px;
    margin: 50px auto;
    background-color: white;
    border-radius: 10px;
    border: 1px solid gainsboro;
    > div {
      align-items: center;
      height: 100%;
      &:first-child {
        justify-content: flex-start;
        color: white;
        position: relative;
        img {
          border-radius: 10px 0 0 10px;
          width: 100%;
          height: 100%;
        }
        > div {
          position: absolute;
          padding: 50px;
          > div {
            margin-bottom: 10px;
            a {
              color: white;
              &:hover {
                text-decoration: underline;
              }
            }
            p {
              margin: 0;
            }
            svg {
              margin-right: 10px;
            }
          }
        }
      }
      &:last-child {
        justify-content: center;
        .ant-form {
          width: 100%;
          max-width: 400px;
          padding: 20px;
          .ant-form-item {
            margin-bottom: 20px;
          }
        }
      }
    }
  }

  .map {
    width: 100vw;
    margin-bottom: 0px;
    img {
      filter: none;
    }
  }

  @media (max-width: 1300px) {
    > div {
      margin: 0 auto;
    }
    > .banner {
      background-attachment: scroll;
    }
    > .banner-inner {
      align-items: flex-start;
      left: 20px;
      width: calc(100vw - 40px);
      h1 {
        font-size: 2rem;
        text-transform: capitalize;
      }
      .ant-btn,
      a {
        width: 100%;
      }
    }
    h2 {
      margin-left: 0px;
      text-align: center;
      width: 100%;
    }
    > .realisations {
    }
    > .services {
      h3 {
        position: relative !important;
        top: 0px !important;
        margin-bottom: 20px;
      }
      > div > div {
        height: 300px;
      }
    }
    > .reviews {
      padding: 0 10px;
      .globals {
        .rating {
          flex-direction: column;
          margin-top: -30px;
          p {
            margin-left: 0px;
          }
        }
      }
      .reviews {
        > div {
          width: 100%;
        }
      }
    }
    > .contact {
      flex-direction: column;
      width: 100vw;
      padding: 0;
      margin: 0;
      height: auto;
      > div {
        padding: 0;
        margin-left: -1px;
        width: 100vw;
        &:first-child {
          img {
            border-radius: 0;
            height: 500px;
          }
          > div {
            padding: 20px;
          }
        }
        &:last-child {
          .ant-form {
            padding: 20px;
          }
        }
      }
    }
    > .map {
      margin-top: 0px;
    }
  }
`;
