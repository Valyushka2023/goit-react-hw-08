import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, (state) => state.filters.name],
  (contacts, filterText) =>
    contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterText.toLowerCase()) ||
        contact.number.includes(filterText)
    )
);


