import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './api';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  fetchContacts()
);

export const createContactsThunk = createAsyncThunk(
  'contacts/addContact',
  data => addContact(data)
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);
