import styled from "styled-components";

export const Player = styled.section`
  width: 100%;
  height: 100%;
  background-color: white;
  > div {
    width: 100%;
    height: 50%;
    video {
      width: 100%;
      height: 150px;
    }
    > div {
      width: 20%;
      height: 50px;
      margin:0 auto;
      button {
        width: 60px;
        height: 25px;
        border: 1px solid black;
        background-color: black;
        color: #fff;
        cursor: pointer;
        border-radius: 20px;
        margin-right: 20px;
      }
    }
  }
`;