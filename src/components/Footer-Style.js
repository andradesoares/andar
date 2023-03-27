import styled from "styled-components";

export const Container = styled.div`
  background-color: #292f45;
  padding: 0.8vw 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  @media (max-width: 632px) {
    p {
      font-size: 14px;
      line-height: 16px;
    }
  }
`;
