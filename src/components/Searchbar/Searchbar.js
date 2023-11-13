import React from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchbarHeader,
} from './Searchbar.styled';

// Компонент приймає один проп onSubmit – функцію для передачі значення інпута під час сабміту форми.
// Створює DOM - елемент наступної структури.
export const Searchbar = ({ onSubmit }) => (
  <SearchbarHeader>
    <SearchForm onSubmit={onSubmit}>
      <SearchFormButton type="submit">
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>

      <SearchFormInput
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </SearchForm>
  </SearchbarHeader>
);
