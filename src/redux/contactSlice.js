import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './thunks';
import {
  handlePending,
  handleGetFulfilled,
  handleRejected,
  handleAddFulfilled,
  handleDeleteFulfilled,
} from './handlers';

const contactInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  extraReducers: builder => {
    builder

      .addCase(getContactsThunk.fulfilled, handleGetFulfilled)
      .addCase(createContactsThunk.fulfilled, handleAddFulfilled)
      .addCase(deleteContactsThunk.fulfilled, handleDeleteFulfilled)
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          createContactsThunk.pending,
          deleteContactsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          createContactsThunk.rejected,
          deleteContactsThunk.rejected
        ),
        handleRejected
      );
  },
});

export const contactsReducer = contactSlice.reducer;

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: contactInitialState,
//   reducers: {
//     addContact(state, action) {
//       state.items = [action.payload, ...state.items];
//     },

//     deleteContact(state, action) {
//       state.items = state.items.filter(({ id }) => id !== action.payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactSlice.actions;
// export const contactsReducer = contactSlice.reducer;
// export const getContacts = state => state.contacts.items;

// const persistConfig = {
//   key: 'root',
//   storage,
// };
// export const persistedReducer = persistReducer(persistConfig, contactsReducer);
