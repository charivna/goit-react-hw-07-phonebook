import { ButtonDel, ListItem } from './ContactList.styled';

export const Contact = ({ name, number, onClick }) => (
  <ListItem>
    <p>
      {name}: {number}
    </p>
    <ButtonDel type="button" onClick={onClick}>
      Delete
    </ButtonDel>
  </ListItem>
);
