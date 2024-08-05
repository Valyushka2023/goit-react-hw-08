import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

// Селектор для отримання значення фільтра з поля 'name'
const selectNameFilter = (state) => state.filters.name;

// Селектор для відфільтрованих контактів
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);