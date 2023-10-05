import { useDispatch, useSelector } from 'react-redux';
import { Contact } from './Contact';
import { List } from './ContactList.styled';
import { useEffect } from 'react';
import { deleteContactsThunk, getContactsThunk } from 'redux/thunks';

export const ContactList = () => {
  const { items, error, isLoading } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const filtered = useSelector(state => state.filter);

  const normalizedFilter = filtered.toLowerCase();

  const filteredContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {items && (
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
      )}
      {error && <h2>{error}</h2>}
    </>
  );
};
