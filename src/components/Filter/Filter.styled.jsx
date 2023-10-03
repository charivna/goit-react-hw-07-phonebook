import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 18px;
`;
export const FilterInput = styled.input`
  padding: 2px 5px;
  margin-top: 6px;
  width: 300px;

  :hover,
  :focus {
    border-color: green;
    border-radius: 4px;

    transition: all 250ms linear;
  }
`;
