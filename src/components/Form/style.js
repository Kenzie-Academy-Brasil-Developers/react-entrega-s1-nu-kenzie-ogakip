import styled from "styled-components";

export const FormTransactionBox = styled.form`
  width: 90%;
  height: 318px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e9ecef;
  box-shadow: 2px 2px 10px #e9ecef;

  @media (min-width: 768px) {
    width: 90%;
    border: 1px solid #e9ecef;
    box-shadow: 4px 4px 10px #e9ecef;
  }

  p,
  label {
    color: #212529;
    font-weight: 600;
  }

  button {
    width: 90%;
    height: 48px;
    border-radius: 8px;
    border: none;
    color: white;
    background-color: #fd377e;
    outline: none;
  }
`;

export const BoxTransactionDescription = styled.div`
  width: 90%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  span {
    font-size: 12px;
    color: #868e96;
  }

  input {
    width: 95%;
    height: 42px;
    padding: 0;
    border: none;
    padding-left: 15px;
    background-color: #f8f9fa;
    outline: none;
  }
`;

export const BoxDescriptionInputBox = styled.div`
  width: 90%;
  height: 70px;
  margin: 20px 0px 20px 0px;
  display: flex;
  justify-content: space-around;
`;

export const BoxTransactionEncapsulate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 3px;
  border-radius: 5px;
  background-color: #f8f9fa;
  color: #868e96;

  input {
    width: 60%;
    height: 30px;
    padding: 5px;
    border-radius: 8px;
    border: none;
    outline: none;
    background: none;
  }
`;

export const BoxTransactionInputValue = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 12px;
  font-weight: 400;
`;

export const BoxTransactionOptionBox = styled.div`
  width: 45%;
  font-size: 12px;
  font-weight: 400;

  select {
    width: 100%;
    height: 45px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #f8f9fa;
    color: #5b6166;
    font-size: 12px;
    font-weight: 400;
  }
`;
