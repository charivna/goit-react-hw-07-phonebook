import styled from '@emotion/styled';

export const Form = styled.form`
  width: 300px;
  padding: 15px;
  border: 2px solid green;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 18px;
`;
export const Input = styled.input`
  padding: 2px 5px;
  margin-top: 6px;
  width: 200px;
  :hover,
  :focus {
    border-color: green;
    border-radius: 4px;

    transition: all 250ms linear;
  }
`;

export const ButtonAdd = styled.button`
  padding: 2px 10px;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: darkolivegreen;
  color: aliceblue;
  cursor: pointer;
  font-weight: 500;

:hover,
:focus {
  background-color: #c4d145;
  color: white;

  transition: all 250ms linear;
`;
