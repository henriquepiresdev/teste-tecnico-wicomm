import styled from "styled-components";

export const DivCard = styled.div`
  width: 266px;
  height: 499px;
  display: flex;
  flex-direction: column;
  .Container-figure {
    height: 311px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-white-f7);
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 90%;
      }
    }
    .heart {
      height: 90%;
      align-items: flex-start;
      justify-content: flex-start;
      svg {
        position: relative;
        z-index: 1;
        right: 10px;
        width: 21px;
        height: 21px;
      }
    }
  }
  div {
    padding-left: 2px;
    height: 128px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      margin-top: 2px;
      font-family: var(--font-oswald);
      font-size: 17px;
      font-weight: 400;
    }
    .promo {
      font-family: var(--font-oswald);
      font-size: 14px;
      font-weight: 400;
      text-decoration-line: line-through;
      color: var(--gray-3);
    }
    .stars {
      display: flex;
      flex-direction: row;
      height: 15px;
      overflow: hidden;
    }
    .actual-price {
      font-family: "Aktiv Grotesk Ex";
      text-transform: uppercase;
      font-size: 22px;
      font-weight: 700;
      display: flex;
      align-items: center;
      letter-spacing: -1px;
      text-transform: uppercase;
      span {
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
  button {
    margin: 0;
    padding: 0;
  }
`;
