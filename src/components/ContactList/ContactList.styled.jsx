import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 20px;
  padding-right: 20px;
  list-style: none;
  width: 300px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 500;
`;

export const ButtonDel = styled.button`
  display: flex;
  padding: 2px 10px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: #ac2828;
  color: aliceblue;
  cursor: pointer;
  font-weight: 500;

  :hover,
  :focus {
    background-color: #e46969;
    color: white;

    transition: all 250ms linear;
  }
`;
