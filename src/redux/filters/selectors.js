// // filters/selectors.j
import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

// Отримання значення фільтра (наприклад, з поля вводу)
export const selectFilterValue = (state) => state.filters.filterValue;

// Селектор для відфільтрованих контактів
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    return contacts.filter((contact)   =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())  

    );
  }
);