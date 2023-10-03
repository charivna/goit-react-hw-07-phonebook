import { useDispatch, useSelector } from 'react-redux';
import { Contact } from './Contact';
import { List } from './ContactList.styled';
import { selectContacts, selectStatusFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContactsThunk, getContactsThunk } from 'redux/thunks';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filtered = useSelector(selectStatusFilter);

  const normalizedFilter = filtered.toLowerCase();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    dispatch(getContactsThunk(), [dispatch]);
  });

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onClick={() => dispatch(deleteContactsThunk(id))}
        />
      ))}
    </List>
  );
};
